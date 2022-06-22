const indexRoute = require("express").Router();

const jobsController = require("../controller/jobsController");

indexRoute.get("/", jobsController.getJobs);

module.exports = indexRoute;
