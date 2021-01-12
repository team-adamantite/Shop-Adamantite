const express = require("express");
const port = 3000;
const cors = require("cors");
const path = require("path");

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../client/public")));

// server routing
app.use('/api/endpoint', require('./Routes/index.js'));

// listening
app.listen(port, () => {
  console.log(`Server is running on port: ${PORT}`);
});
