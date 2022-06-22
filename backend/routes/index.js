const indexRoute = require("express").Router();

const jobsController = require("../controller/jobsController");

indexRoute.get("/", jobsController.getJobs);

const userRoutes = require("./userRoute");
indexRoute.use("/user", userRoutes);

module.exports = indexRoute;
