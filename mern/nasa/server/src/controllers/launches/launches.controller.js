const {
  getAllLaunches,
  addNewLaunch,
  exitsLaunchWithId,
  abortLaunchById,
} = require("../../services/launches/launches.service");

const httpGetAllLaunches = (req, res) => res.status(200).json(getAllLaunches());

const httpAddNewLaunch = (req, res) => {
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

  addNewLaunch(launch);

  return res.status(201).json(launch);
};

const httpAbortLaunch = (req, res) => {
  const launchId = Number(req.params.id);

  // if launch doesn't exits
  if (!exitsLaunchWithId(launchId)) {
    return res.status(404).json({ error: "Launch not found." });
  }

  // if launch does exits
  const aborted = abortLaunchById(launchId);
  return res.status(200).json(aborted);
};

module.exports = { httpGetAllLaunches, httpAddNewLaunch, httpAbortLaunch };
