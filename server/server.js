const express = require('express');
const request = require('request');
const PORT = 3000;
const cors = require('cors');
const path = require('path');
const compression = require('compression');
// const resize = require('./resize');
// const { expressSharp, FsAdapter, HttpAdapter } = require('express-sharp');
// const token = require('../client/config/config.js');

const app = express();

// console.log('this is the token ', token)

// middleware
app.use(compression());
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/public')));
// app.use(
//   '/api/fec2/hratx/products/',
//   expressSharp({
//     imageAdapter: new HttpAdapter({
//       prefixUrl: 'https://app-hrsei-api.herokuapp.com/',
//     })
//   })
// )

app.get(`/api/fec2/hratx/products/\.\//styles/`, (req, res) => {
  request(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${req.params.id}/styles`,
  function(err, response, body) {
    if (err) {
      console.error('Could not retrieve thumbnails in proxy server: ', err)
    } else {
      console.log('this is the api response: ', response);
      res.status(200).send(response)
    }
  })
})

// listening
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
