const express = require('express');
const morgan = require("morgan");
const actionsRouter = require("./routers/actionsRouter.js")
// const postRouter = require("./posts/postRouter.js")
const server = express();


server.use(express.json());
server.use(logger)
server.use(morgan("dev"));
server.use("/actions/", actionsRouter)
// server.use("/api/posts", postRouter)


server.get('/', (req, res) => {
  res.send(`<h1>Sprint Challenge: webapi-challenge</h1>`)
});

//custom middleware

function logger(req, res, next) {
  console.log(`logger info: METHOD => URL: ${req.method} => ${req.url} [Timestamp: ${new Date().toISOString()}]`)
  next()
}

module.exports = logger

module.exports = server;
