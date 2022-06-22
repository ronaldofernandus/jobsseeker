const indexRoute = require("express").Router();

const jobsController = require("../controller/jobsController");

const userRoutes = require("./userRoute");
indexRoute.use("/user", userRoutes);

const jobsRoute = require("./jobsRoute");
indexRoute.use("/jobs", jobsRoute);

module.exports = indexRoute;
