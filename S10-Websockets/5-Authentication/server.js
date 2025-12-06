const express = require('express');
const path = require('path');
const http = require('http');
const {Server} = require('socket.io');
const jwt = require('jsonwebtoken');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {origin: "*"},
})

const SECRET_KEY = 'your_secret_key';
const PORT = 3000;

// Serve the html page.
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

let chatrooms = {
    room1: [],
    room2: [],
    room3: [],
    room4: []
};

app.use(express.json());

// Mock login end point
app.post('/login', (req,res) => {
    const {username, password} = req.body;
    if (username === password){
        const token = jwt.sign({username}, SECRET_KEY, {expiresIn: '1h'});
        return res.json({token});
    }else{
        return res.status(401).json({error: 'Invalid credentials'});
    }
})

// 
io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    if(!token) {
        return next(new Error('Authentication error'));
    }
    try {
        const payload = jwt.verify(token,SECRET_KEY);
        socket.user = payload;
        next();
    } catch(err){
        next (new Error ("Authentication error"));
    }
});

io.on('connection', (socket) => {
    console.log(`${socket.user.username} connected`);
    
    // Remove user from any other room
    // Push last 50 message for the new room
    // let the user join the room
    socket.on('join-room', (room) => {

        //
        const currentRooms = Array.from(socket.rooms).filter((r) => r !== socket.id);

        if (currentRooms.length > 0) {
            
        }
    })
})