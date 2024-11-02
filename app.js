const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mysql = require("mysql2");
require("dotenv").config();

const app = express();
const port = process.env.PORT;
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

app.use("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(port, "localhost", () => console.log("listening on port " + port));
