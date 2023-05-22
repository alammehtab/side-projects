const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse");

const planets = require("./planets.mongo");

// planets don't have a model so that's y d service file is empty
// and all functions are written here

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    // amount of light on the planet compared to earth
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    // radius compared to the radius of earth
    planet["koi_prad"] < 1.6
  );
}

function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "..", "data", "kepler_data.csv")
    )
      .pipe(parse({ comment: "#", columns: true }))
      .on("data", async (data) => {
        if (isHabitablePlanet(data)) {
          savePlanet(data);
        }
      })
      .on("error", (error) => {
        console.log(error);
        reject(error);
      })
      .on("end", async () => {
        const countPlanetsFound = (await getAllPlanets()).length;
        console.log(`${countPlanetsFound} habitable planets found.`);
        resolve();
      });
  });
}

// in the second bracket i'm exluding the irrelevent data
const getAllPlanets = async () => await planets.find({}, { _id: 0, __v: 0 });
const savePlanet = async (planet) => {
  try {
    await planets.updateOne(
      {
        keplerName: planet.kepler_name,
      },
      {
        keplerName: planet.kepler_name,
      },
      {
        upsert: true,
      }
    );
  } catch (error) {
    console.log(`Could not save planet ${error}`);
  }
};

module.exports = { loadPlanetsData, getAllPlanets };
