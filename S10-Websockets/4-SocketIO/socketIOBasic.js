const express = require('express');
const { METHODS } = require('http');
const app = express();

const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors:{
        origin: '*', // enabling cors from everywhere
        methods: ['GET', 'POST'], // just let GET and POST request entering the system
    },
})

let score = {
    runs: 0,
    wicket: 0,  
    overs: 0,
}

// Serve the main score pag
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/socketIOBasicClient.html');
})

// Serve the admin panel
app.get('/admin', (req,res) => {
    res.sendFile(__dirname + '/socketIOBasicAdmin.html');
});

io.on('connection', socket => { // similar to webSocket there's a connection event and once the connection established
    console.log('A user connected')

    // Send current score to newly connected client.
    socket.emit('score update', score); // send score, event - score update with this value (score). Thee message was pushed
                                        // the connection 'socket'.

    // Listen for score updates from admin
    socket.on('update score', newScore => {
        score = newScore // if any client sends the msg to udpate the score, we update the score into the score object
        // Broadcast
        io.emit('score update', score)
    })

    socket.on('disconnect', () => {
        console.log('User disconnected')
    })
    // It autohandles the reconnection so if I disconnect the client and come back again, the connection would be auto
    // established, which is not in the case of WebSockets, all the reconnection logics needs to be written.
})

const PORT = process.env.PORT || 3000

http.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})

