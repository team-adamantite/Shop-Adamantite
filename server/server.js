const express = require('express');
const cacheControl = require('express-cache-controller');
const PORT = 3000;
const cors = require('cors');
const path = require('path');
const compression = require('compression');

const app = express();

// console.log('this is the token ', token)

// middleware
// compress all responses
app.use(compression());
app.use(express.json());
app.use(cors());

app.use(
  cacheControl({
    noCache: true
  })
);
app.use(express.static(path.join(__dirname, '../client/public')));

// listening
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
