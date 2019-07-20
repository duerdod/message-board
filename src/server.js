const express = require('express');
const createServer = require('./createServer');
const server = createServer();

server.start(server => console.log(`running on port ${server.port}`));
