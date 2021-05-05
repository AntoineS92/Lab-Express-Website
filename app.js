const express = require("express");
const hbs = require("hbs");
const app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

const baseRouter = require("./router/index.js");
app.use(baseRouter);

app.listen(5000);
