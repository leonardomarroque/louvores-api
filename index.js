require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./src/routes");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === "production")
    res.status(500).json({ error: "Internal Server Error" })
  else return next(err);
});

app.listen(PORT);