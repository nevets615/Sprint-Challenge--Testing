const express = require("express");

const router = require("./data/router.js");

const server = express();

server.use(express.json());

server.use("/api/games", router);



module.exports = server;