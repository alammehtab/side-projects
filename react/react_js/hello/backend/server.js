const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/chats");

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const requiredChat = chats.find((c) => c._id === req.params.id);

  if (requiredChat) {
    res.send(requiredChat);
  } else {
    res.send("Chat not found.");
  }
});

app.listen(PORT, console.log(`Server started on PORT ${PORT}.`));
