const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

// express sever app
const app = express();

// goals routes
app.use("/api/v1/goals", require("./routes/goalsRoutes"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}.`));
