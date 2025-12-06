const net = require('net'); //layer 4 library, server at layer 4
const clients = new Set(); // infomation of all the clients who have connected to the Server

const {clientDuplexStream} = require('./stream'); // this duplex stream is basically the connection between these two
                                                // sockets, btw clientSocket and serverSocket. It has responsibility 
                                                // of reading data and writing data that's it.    

const server = net.createServer((clientSocket) => {
    const clientStream = new clientDuplexStream(clientSocket); /*we have a server, when it creates a connection, client
    sends a socket and wants to create a connection. Make that connection using duplex stream. Client sends socket, 
    our server is running so it has a socket. It basically says connect client socket and server socket using 
    Duplex Stream
    */
    clients.add(clientStream); // put this connection in the set

    console.log('Client connected');
    clientStream.write('Welcome to the chat server!\n'); // put a message over the same connection

    // Dump data on receive 
    clientStream.on('data', (chunk) => {  // message would be received at the OS level. It would be then passed to LibUV.
        // and LibUV finally emit this event--> that I have data received.
        const message = `Client: ${chunk.toString()}` // You read the message and dump it here on the server side.
        console.log(message);

        // Broadcast the message to all clients
        for (const client of clients){ // will go throught all  my connected client, and send them the same message,  
            if (client !== clientStream){ // except for the client who sent the message
                client.write(message);
            }
        }

        // when you receive any message on this connection, log it here and look out for all the connection which was ever
        // made excluding the present connection and then write the message on all the connection.
        // This is basically broadcast operation. Server receives the message and broadcast to everyone else.
    })

    

    //Housekeeping

    clientStream.on('end', () => {
        console.log('Client disconnected');
        clients.delete(clientStream);
    });

    clientStream.on('error', (err) => {
        console.log('Client stream error', err);
        clients.delete(clientStream);
    });
})

 
server.listen(8080, () => { // Starting a server on port 8080 means that we just opened a socket at port 8080
    console.log('Chat server listening on port 8080');
});

