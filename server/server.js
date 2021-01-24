const express = require('express');
const cacheControl = require('express-cache-controller');
const PORT = 3000;
const cors = require('cors');
const path = require('path');
const compression = require('compression');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

const app = express();

// Configuration
const HOST = 'localhost';
const API_SERVICE_URL = 'https://app-hrsei-api.herokuapp.com/';

// middleware
// compress all responses
app.use(compression());
app.use(express.json());
app.use(cors());

// Proxy endpoints
app.use(
  '/proxy',
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
      [`^/proxy`]: ''
    },
    headers: { Authorization: process.env.TOKEN }
  })
);

app.use(
  cacheControl({
    noCache: true
  })
);
app.use(express.static(path.join(__dirname, '../client/public')));

// listening
app.listen(PORT, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
