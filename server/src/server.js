require('dotenv').config({ path: '../.env' });
const express = require('express');
const app = express();
const createServer = require('./createServer');
const server = createServer();
const cookieParser = require('cookie-parser');
const path = require('path');

// ENV
const port = process.env.PORT || 8000;
const hostname = process.env.HOSTNAME || '0.0.0.0';

const clientPath = path.join(__dirname, '../../client');

const corsOptions = {
  origin: '*',
  credentials: true
};

// Middlewares
// Cookies
app.use(cookieParser());

// Read req/req body
app.use(express.json());

// Debugging
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    // console.log(req.path);
    // console.log(req.cookies);
    next();
  });
}

// Static files
if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(clientPath, 'build')));
  app.get('/', (req, res) => {
    res.sendFile(path.join(clientPath, 'build'));
  });
}

// Apply Express as middleware to Apollo Server.
server.applyMiddleware({ app, cors: corsOptions });

// Start
app.listen({ port, hostname }, () =>
  console.log(`Listen to ${hostname}:${port}`)
);
