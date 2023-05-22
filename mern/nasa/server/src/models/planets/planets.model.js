const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse");

const habitablePlanets = [];

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
      .on("data", (data) => {
        if (isHabitablePlanet(data)) {
          habitablePlanets.push(data);
        }
      })
      .on("error", (error) => {
        console.log(error);
        reject(error);
      })
      .on("end", () => {
        console.log(`${habitablePlanets.length} habitable planets found.`);
        resolve();
      });
  });
}

const getAllPlanets = () => habitablePlanets;

module.exports = { loadPlanetsData, getAllPlanets };
