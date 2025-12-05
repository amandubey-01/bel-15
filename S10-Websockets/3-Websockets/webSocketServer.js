const WebSocket = require('ws');
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": 'text/plain' });
    res.end('Websocket Server');
});

// Create a WebSocket server by passing the http server. Wrapping WebSocket server over the
// the http server.
const wss = new WebSocket.Server({server});

// Handle new WebSocket connections.
// any new WebSocket connection will go through this code.
wss.on('connection', (ws) => {
    console.log('New client connected');
    // Handle incoming messages.
    let tmp = 1; // probably just to send the message.
    ws.on('message', (message) => {
        console.log('Received:', message.toString());
        // Echo the message back to client.
        ws.send(`Server received: ${message}`);
        setInterval(() => {
            tmp++;
            ws.send(`New message ${tmp}`);
        },1000);
    });

    ws.on('close', () => {
        console.log("Client disconnected");
    });
});


// Start the server
const PORT = 8001;
server.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
});