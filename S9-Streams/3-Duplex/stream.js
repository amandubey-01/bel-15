const {Duplex} = require('stream');

// Custom Duplex stream for each client.
class clientDuplexStream extends Duplex{ // creating a duplex stream extending Duplex Stream
    constructor(clientSocket){  
        super(); // streams would also have their own buffers. So whatever is the clientSocket, connects it to clientSocket
        this.socket = clientSocket; /* when we create duplex stream, this knows of the present server but it doesn't know
        about the client. It has information about the server, basically about the server socket. But it also needs the
        client socket. Firstly, we try to connect these two sockets, making a connection.
        */
        this.socket.on('data', (chunk) => this.push(chunk)); // Pipe data to readable side. And whenver any information is 
                        // is received is pushed to the buffer 
        this.socket.on('end', () => this.push(null)); // and if the connection is closed we push null to the buffer and 
         // closed the connection.
    }

    _write(chunk, encoding, callback) {
        this.socket.write(chunk, encoding, callback); // write to the socket
    } // if someone writes the data to this Stream, we write data to the clientSocket directly.

    _read(size){
        // No-op, data pushed via socket 'data' event
    }

    // There is an convention for the duplex that we can provide our own mechanism to read and write.
}

module.exports = {clientDuplexStream}