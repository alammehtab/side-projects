const http = require("http");
require("dotenv").config();
const app = require("./app");
const { loadLaunchesData } = require("./models/launches/launches.model");
const { loadPlanetsData } = require("./models/planets/planets.model");
const { mongoConnect } = require("./services/mongo");

const PORT = process.env.PORT || 8000;
// creating/starting server this way not only helps to respond to
// http requests but to other types of connections like websockets
const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  await loadPlanetsData();
  await loadLaunchesData();
  server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
}

startServer();
