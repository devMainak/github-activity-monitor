// app.js
const express = require("express");
const app = express();
const cors = require("cors");

// applying middlewares
const corsOptions = {
  origin: "*",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

app.use("/github", require("./routes/github.routes"));

module.exports = app;
