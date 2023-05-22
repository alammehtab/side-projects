const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");
const { loadPlanetsData } = require("./models/planets/planets.model");

const PORT = process.env.PORT || 8000;
const MONGO_URI =
  "mongodb+srv://nasa-api:E0jEkJnrCsSK5iwO@cluster0.fb0fdy5.mongodb.net/nasa-app?retryWrites=true&w=majority";
// creating/starting server this way not only helps to respond to
// http requests but to other types of connections like websockets
const server = http.createServer(app);

mongoose.connection.on("open", () => console.log("MongoDB connected."));
mongoose.connection.on("error", (err) => console.log(err));

async function startServer() {
  await mongoose.connect(MONGO_URI);
  await loadPlanetsData();
  server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
}

startServer();
