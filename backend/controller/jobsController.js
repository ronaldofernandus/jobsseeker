const axios = require("axios").default;
const URL = "http://dev3.dansmultipro.co.id/api/recruitment/positions.json";
class jobsController {
  static async getListJobs(req, res) {
    try {
      let getListJobs = await axios({
        method: "GET",
        url: URL,
      });

      res.status(200).json(getListJobs.data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getJobsByWord(req, res) {
    try {
      let description = req.query.description;
      let location = req.query.location;
      let getJobsByWord = await axios({
        method: "GET" + "?",
        url: URL,
      });

      res.status(200).json(getJobsByWord[(description, location)]);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // static async getJobsByWord(req, res) {
  //   try {
  //     const queryParameter=req.query;
  //     let getJobsByWord = await axios({
  //       method: "GET",
  //       url: URL + { params: { answer: 42 } },
  //     });

  //     res.status(200).json(getJobsByWord.queryParameter);
  //   } catch (error) {
  //     res.status(500).json(error);
  //   }
  // }
}

module.exports = jobsController;
