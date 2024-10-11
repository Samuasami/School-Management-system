const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
