const express = require("express");
const launchesRouter = require("./launches/launches.router");
const planetsRouter = require("./planets/planets.router");

const api = express.Router();

api.use("/v1/planets", planetsRouter);
api.use("/v1/launches", launchesRouter);

module.exports = api;
