// Importing required libraries
const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

// Creating an express app
const app = express();

// Using middleware for parsing and cors
app.use(express.json());
app.use(cors());

// Define the port you want to use
const PORT = process.env.PORT || 4000; // You can change the port number here

// Creating an http server with the defined port
const server = http.createServer(app);

// Initialising Socket.io with the http server
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
});

// Using Socket.io for chat purposes
io.on('connection', (socket) => {
    // Joining a room
    socket.on('join_room', (data) => {
        socket.join(data);
        console.log("User joined room:", data);
    });

    // Sending a message to a room
    socket.on('send_message', (data) => {
        io.to(data.room).emit('receive_message', data);
    });

    // Disconnecting from a room
    socket.on('disconnect', () => {
        console.log("User disconnected");
    });
});

// Start the server and listen on the defined port
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
