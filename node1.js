const WebSocket = require("ws");

// Create server
const server = new WebSocket.Server({ port: 3000 });

server.on("connection", (socket) => {
    console.log("Client connected");

    // Receive message from client
    socket.on("message", (message) => {
        console.log("Client says:", message.toString());

        // Send response
        socket.send("Message received!");
    });

    socket.send("Welcome Client!");
});