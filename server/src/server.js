require('dotenv').config();
const express = require('express');
const app = express();
const createServer = require('./createServer');
const server = createServer();
const cookieParser = require('cookie-parser');

// ENV
const port =
  process.env.NODE_ENV === 'development' ? 8000 : process.env.API_PORT;
const hostname =
  process.env.NODE_ENV === 'development' ? '0.0.0.0' : process.env.API_HOSTNAME;

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
    next();
  });
}

// Apply Express as middleware to Apollo Server.
server.applyMiddleware({ app, cors: corsOptions });

// Start
app.listen({ port, hostname }, () => console.log(`Listen to ${port}`));
