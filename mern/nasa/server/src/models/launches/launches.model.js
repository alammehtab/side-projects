const launches = require("./launches.mongo");
const planets = require("../planets/planets.mongo");

const DEFAULT_FLIGHT_NUMBER = 100;

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  target: "Kepler-442 b",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

const getAllLaunches = async () => {
  return await launches.find({}, { _id: 0, __v: 0 });
};

const saveLaunch = async (launch) => {
  const planet = await planets.findOne({
    keplerName: launch.target,
  });
  if (!planet) {
    throw new Error("No matching planet found.");
  }
  // replaced updateOne with findOneAndUpdate cz it was exposing $setOnInsert in the response
  await launches.findOneAndUpdate(
    {
      flightNumber: launch.flightNumber,
    },
    launch,
    { upsert: true }
  );
};

const scheduleNewLaunch = async (launch) => {
  const newFlightNumber = (await getLatestFlightNumber()) + 1;
  const newLaunch = Object.assign(launch, {
    success: true,
    upcoming: true,
    customers: ["Danish Tailors", "mehtab.io"],
    flightNumber: newFlightNumber,
  });

  await saveLaunch(newLaunch);
};

saveLaunch(launch);

const existsLaunchWithId = async (launchId) => {
  return await launches.findOne({
    flightNumber: launchId,
  });
};

const getLatestFlightNumber = async () => {
  const latestLaunch = await launches.findOne().sort("-flightNumber");

  if (!latestLaunch) {
    return DEFAULT_FLIGHT_NUMBER;
  }
  return latestLaunch.flightNumber;
};

const abortLaunchById = async (launchId) => {
  // directly returning the response was giving metadata
  const aborted = await launches.updateOne(
    { flightNumber: launchId },
    { upcoming: false, success: false }
  );

  return aborted.modifiedCount === 1;
};

module.exports = {
  existsLaunchWithId,
  getAllLaunches,
  abortLaunchById,
  scheduleNewLaunch,
  saveLaunch,
};
