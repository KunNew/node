const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hey Socket.io</h1>");
});

app.listen(3001, () => {
  console.log("listening on *:3001");
});
