const {
  getJobs,
  getJobById,
  createJob,
  getTotalCount,
} = require("../services/jobs");

class JobsController {
  createJob = async (req, res, next) => {
    try {
      const result = await createJob(req.body);
      return res.json(result.rows[0]);
    } catch (error) {
      console.log("Error creating new job", error);
    }
  };
  getJobs = async (req, res, next) => {
    try {
      const { page = 1, pageSize = 10 } = req.query || {};
      const jobs = await getJobs({ page, pageSize });
      const totalCount = await getTotalCount();
      return res.json({
        totalCount: Number(totalCount.rows[0].count),
        result: jobs.rows,
      });
    } catch (error) {
      console.log("Error fetching jobs", error);
    }
  };
  getJobById = async (req, res, next) => {
    try {
      const jobs = await getJobById();
      return res.json(jobs.rows);
    } catch (error) {
      console.log("Error fetching jobs", error);
    }
  };
}

module.exports = new JobsController();
