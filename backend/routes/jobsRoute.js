const jobsRoute = require("express").Router();
const jobsController = require("../controller/jobsController")

jobsRoute.get('/list',jobsController.getListJobs)
jobsRoute.get('/findByWord',jobsController.getJobsByWord)


module.exports =jobsRoute