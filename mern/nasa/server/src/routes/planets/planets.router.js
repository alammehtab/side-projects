const express = require("express");
const {
  httpGetAllPlanets,
} = require("../../controllers/planets/planets.controller");
const planetsRouter = express.Router();

planetsRouter.get("/", httpGetAllPlanets);

module.exports = planetsRouter;
