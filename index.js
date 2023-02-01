const express = require("express");
require("@prisma/client");
require("dotenv").config();
const bodyParser = require("body-parser");
const multer = require("multer");

const app = express();
const route = require("./routes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", route);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is running 🚀");
});
