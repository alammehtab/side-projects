const launches = require("../../models/launches/launches.model");

let latestFlightNumber = 100;

const getAllLaunches = () => {
  return Array.from(launches.values());
};

const addNewLaunch = (launch) => {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      flightNumber: latestFlightNumber,
      customers: ["Zero to Mastery", "NASA"],
      upcoming: true,
      success: true,
    })
  );
};

const exitsLaunchWithId = (launchId) => {
  return launches.has(launchId);
};

const abortLaunchById = (launchId) => {
  const aborted = launches.get(launchId);
  aborted.upcoming = false;
  aborted.success = false;

  return aborted;
};

module.exports = {
  getAllLaunches,
  addNewLaunch,
  exitsLaunchWithId,
  abortLaunchById,
};
