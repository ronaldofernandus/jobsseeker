

class jobsController {
  static async getJobs(req, res) {
    try {
      let getJobs = await Posting.findAll({});
      res.status(200).json(getJobs);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

module.exports = jobsController;
