const pool = require("../../dbs/db");

const createJob = ({ title, description, expiry_date }) => {
  return pool.query(
    "INSERT INTO jobs (title, description, expiry_date) VALUES($1, $2, TO_DATE($3, 'DD/MM/YYYY')) RETURNING *;",
    [title, description, expiry_date]
  );
};

const getTotalCount = () => {
  return pool.query("SELECT COUNT(id)FROM jobs;");
};

const getJobs = ({ page, pageSize }) => {
  return pool.query("SELECT * FROM jobs LIMIT $1 OFFSET ($2 - 1) * $1;", [
    pageSize,
    page,
  ]);
};

const getJobById = (id) => {
  return pool.query("SELECT * FROM jobs WHERE id=$1;", [id]);
};

module.exports = {
  createJob,
  getJobs,
  getJobById,
  getTotalCount,
};
