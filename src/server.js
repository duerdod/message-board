require('dotenv').config();
const express = require('express');
// const createServer = require('./createServer');
// const server = createServer();
const port = 8000;
const server = express();

// Middleware
server.use(express.json());

// Debugging
server.use((req, res, next) => {
  console.log(req.header);
  next();
});

// server.get('/hej', (req, res) => console.log(req));

server.listen({ port, hostname: '0.0.0.0' }, () =>
  console.log(`Listen to ${port}`)
);
