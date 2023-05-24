const mongoose = require("mongoose");

mongoose.connection.once("open", () => console.log("MongoDB connected."));
mongoose.connection.on("error", (err) => console.log(err));

const mongoConnect = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};

const mongoDisconnect = async () => {
  await mongoose.disconnect();
};

module.exports = { mongoConnect, mongoDisconnect };
