const net = require('net');

// Connect to the chat server.
const client = net.createConnection({port:8080}, () =>{ // saying there is some server running at port 8080 and I want to 
                                                        // connect
    console.log("Connected to chat server");
    process.stdin.pipe(client); // Pipe stdin to the server/stream ----> this basically says that whatever user types in
    // terminal pass it to this connection
    
});

client.on('data', (data) => {  // on client side we have a socket --> It basically says that if there is any information
    console.log(`Received: ${data}`); // here then run this function.
});



//Housekeeping functions
client.on('end', () => {
    console.log('Disconnected from server');
});

client.on('error', (err) => {
    console.log('Client', err);
});

process.stdin.on('end', () =>{
    client.end();
});

