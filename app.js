// Import the express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define a port number
const PORT = process.env.PORT || 3000;

// Define a simple route for the homepage
app.get('/', (req, res) => {
    res.send('Hello, welcome to my Node.js app!');
});

// Define another route for a sample API endpoint
app.get('/api/data', (req, res) => {
    const data = {
        message: 'Hello from the API!',
        timestamp: new Date()
    };
    res.json(data);
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
