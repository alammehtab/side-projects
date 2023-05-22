const express = require("express");
const colors = require("colors");
const { errorHandler } = require("./middleware/errorHandler");
const connectDb = require("./config/db");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

// connecting mongodb using mongoose
connectDb();

// express sever app
const app = express();

// to get request body data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// goals routes
app.use("/api/v1/goals", require("./routes/goalsRoutes"));

// user routes
app.use("/api/v1/users", require("./routes/usersRoutes"));

// built-in error handler that we've changed in our middleware
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}.`));
