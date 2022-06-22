const axios = require("axios");
const URL = "http://dev3.dansmultipro.co.id/api/recruitment/positions.json";
class jobsController {
  static async getListJobs(req, res) {
    try {
      let getListJobs = await axios({
        method: "GET",
        url: URL,
      });
      res.status(200).json(getListJobs.data);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = jobsController;
