const path = require("path");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const planetsRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");

const app = express();

//middleware
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(morgan("combined"));
app.use(express.json());
//to serve client
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(planetsRouter);
app.use("/launches", launchesRouter);

// to get pages directly from typing path in the browser, without this typing path directly in
// in browser address bar can't get
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
