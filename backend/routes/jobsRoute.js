const jobsRoute = require("express").Router();
const jobsController = require("../controller/jobsController");

const authentication = require("../middleware/tokenMiddleWare");

jobsRoute.get("/list", authentication, jobsController.getListJobs);
jobsRoute.get("/", jobsController.getJobsByWord);

jobsRoute.get("/page", authentication, jobsController.getPageJobs);
jobsRoute.get("/:id", authentication, jobsController.getPositionById);

module.exports = jobsRoute;
