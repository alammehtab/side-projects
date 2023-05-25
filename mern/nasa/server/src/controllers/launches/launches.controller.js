const {
  getAllLaunches,
  abortLaunchById,
  scheduleNewLaunch,
  existsLaunchWithId,
} = require("../../models/launches/launches.model");
const { getPagination } = require("../../services/query");

const httpGetAllLaunches = async (req, res) => {
  const { skip, limit } = getPagination(req.query);
  const launches = await getAllLaunches(skip, limit);

  return res.status(200).json(launches);
};

const httpScheduleNewLaunch = async (req, res) => {
  const launch = req.body;
  let { mission, rocket, launchDate, target } = launch;

  // if something is missing
  if (!mission || !rocket || !launchDate || !target) {
    return res.status(400).json({ error: "Missing required launch details." });
  }

  launchDate = new Date(launchDate);
  // if launchDate is invalid
  if (isNaN(launchDate)) {
    // u could also use: launchDate==='Invalid Date'
    return res.status(400).json({
      error: "Invalid launch date.",
    });
  }

  await scheduleNewLaunch(launch);

  return res.status(201).json(launch);
};

const httpAbortLaunch = async (req, res) => {
  const launchId = Number(req.params.id);

  const existsLaunch = await existsLaunchWithId(launchId);

  // if launch doesn't exits
  if (!existsLaunch) {
    return res.status(404).json({ error: "Launch not found." });
  }

  // if launch does exits
  const aborted = await abortLaunchById(launchId);

  if (!aborted) {
    return res.status(400).json({
      error: "Launch not aborted",
    });
  }
  return res.status(200).json({
    message: "Launch aborted",
    Ok: true,
  });
};

module.exports = { httpGetAllLaunches, httpScheduleNewLaunch, httpAbortLaunch };
