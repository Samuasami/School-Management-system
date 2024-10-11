const express = require("express");
const cors = require("cors"); // Importing CORS
const app = express();
const PORT = 4000;

// Middleware
app.use(cors()); // Enable CORS for all requests
app.use(express.json()); // For parsing application/json

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
