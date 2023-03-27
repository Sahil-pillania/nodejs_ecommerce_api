const express = require("express");
const path = require("path");
const app = express();
const port = process.env.port || 5000;
require("dotenv").config();
const main = require("./db");
main();

// body parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use("/", require("./Routes/apiRoutes.js"));

// port
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
