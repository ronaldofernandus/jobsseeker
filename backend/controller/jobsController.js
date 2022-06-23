const axios = require("axios").default;
const URL = "http://dev3.dansmultipro.co.id/api/recruitment/positions.json";
const URL1 = "http://dev3.dansmultipro.co.id/api/recruitment/";
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
      let type = req.query.type;
      let getJobsByWord = await axios({
        method: "GET",
        url: URL + "?",
        params: {
          description: description,
          location: location,
          type: type,
        },
      });

      res.status(200).json(getJobsByWord[(description, location, type)]);
      // if (getJobsByWord) {
      //   res.status(200).json(getJobsByWord);
      // } else {
      //   res.status(200).json({
      //     message: "Not Found",
      //   });
      // }
      // res.status(200).json(getJobsByWord.params);
    } catch (error) {
      console.log(error);
      // res.status(500).json(error);
    }
  }

  static async getPageJobs(req, res) {
    try {
      const page = +req.query.page || 1;
      const perPage = +req.query.perPage || 5;
      let getPageJobs = await axios({
        method: "GET",
        url: URL + "?page=" + page,
      });
      const url = URL + "?" + page;

      console.log(url);
      res.status(200).json(getPageJobs.data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getPositionById(req, res) {
    try {
      const id = req.params.id;
      let getPositionById = await axios({
        method: "GET",
        url: URL1 + `/positions/${id}`,
      });
      // const url = URL1 + `positions/${id}`;
      // console.log(url);
      res.status(200).json(getPositionById.data);
      // res.status(200).json("test");
    } catch (error) {
      console.log(error);
      // res.status(500).json(error);
    }
  }
}

module.exports = jobsController;
