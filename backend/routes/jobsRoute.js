const jobsRoute = require("express").Router();
const jobsController = require("../controller/jobsController")

jobsRoute.get('/list',jobsController.getListJobs)


module.exports =jobsRoute