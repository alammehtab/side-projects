const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/chats");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
dotenv.config();
connectDB();

const PORT = process.env.PORT;

app.get("/api/v1/chats", (req, res) => {
  res.send(chats);
});

app.use("/api/v1/users", userRoutes);

app.listen(PORT, console.log(`Server started on PORT ${PORT}.`));
