const express = require("express");
const jobsController = require("../../controllers/jobs.controller");
const router = express.Router();

router.get("/", jobsController.getJobs);
router.get("/:id", jobsController.getJobById);
router.post("/", jobsController.createJob);
router.put("/", jobsController.updateJob);
router.delete("/:id", jobsController.deleteJob);

module.exports = router;
