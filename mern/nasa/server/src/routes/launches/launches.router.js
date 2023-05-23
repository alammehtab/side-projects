const express = require("express");
const {
  httpGetAllLaunches,
  httpAbortLaunch,
  httpScheduleNewLaunch,
} = require("../../controllers/launches/launches.controller");

const launchesRouter = express.Router();

launchesRouter.get("/", httpGetAllLaunches);
launchesRouter.post("/", httpScheduleNewLaunch);
launchesRouter.delete("/:id", httpAbortLaunch);

module.exports = launchesRouter;
