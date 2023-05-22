const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse");

const planets = require("./planets.mongo");

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
      .on("data", async (data) => {
        if (isHabitablePlanet(data)) {
          await planets.create({
            keplerName: data.kepler_name,
          });
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

const getAllPlanets = () =>
  planets.find(
    {
      keplerName: "Kepler-62 f",
      // the string represents the values we want to include in response/result
      // add more fields by adding their names after a space like 'keplerName anotherField'
      // to exclude a field put - infront of it like '-keplerName anotherField'
      // we could also use {} by setting fieldNames to 0 (exclude) or 1 (include)
    },
    "keplerName"
  );

module.exports = { loadPlanetsData, getAllPlanets };
