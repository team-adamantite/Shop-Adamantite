const express = require('express');
// const proxy = require('express-http-proxy');
const PORT = 3000;
const cors = require('cors');
const path = require('path');
// const sharp = require('sharp');
const compression = require('compression');

const app = express();

// middleware
// compress all responses
app.use(compression());
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/public')));
// app.use(
//   '/proxy',
//   proxy('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/')
// );

// listening
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
