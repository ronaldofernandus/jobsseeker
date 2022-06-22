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
      if (getJobsByWord) {
        res.status(200).json(getJobsByWord);
      } else {
        res.status(200).json({
          message: "Not Found",
        });
      }
      res.status(200).json(getJobsByWord.params);
    } catch (error) {
      // console.log(error);
      res.status(500).json(error);
    }
  }

  static async getPageJobs(req, res) {
    try {
      let page = req.query.page;

      let User = await User.findAll()
        .paginate({ page: page, limit: limit })
        .exec();

      // Return the articles to the rendering engine
      res.render("index", {
        User: User,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getPositionById(req, res) {
    try {
      const id = +req.params.id;
      let getPositionById = await axios({
        method: "GET",
        url: URL + `/positions/${id}`,
      });

      res.status(200).json(getPositionById.data);
    } catch (error) {
      // console.log(error);
      res.status(500).json(error);
    }
  }
}

module.exports = jobsController;
