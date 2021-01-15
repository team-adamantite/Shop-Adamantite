const express = require('express');
const PORT = 3000;
const cors = require('cors');
const path = require('path');

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/public')));

// listening
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
