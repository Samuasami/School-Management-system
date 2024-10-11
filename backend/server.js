const express = require("express");
const cors = require("cors");
const initTables = require("./models/initTables");
const pool = require("./config/db");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

initTables();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
