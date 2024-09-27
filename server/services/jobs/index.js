const pool = require("../../dbs/db");

const createJob = ({ title, description, expiry_date }) => {
  return pool.query(
    "INSERT INTO jobs (title, description, expiry_date) VALUES($1, $2, TO_DATE($3, 'DD/MM/YYYY')) RETURNING *;",
    [title, description, expiry_date]
  );
};

const updateJob = ({ id, title, description, expiry_date }) => {
  return pool.query(
    "UPDATE jobs SET title = $1, description = $2, expiry_date = TO_DATE($3, 'DD/MM/YYYY') WHERE id = $4 RETURNING *;",
    [title, description, expiry_date, id]
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
  updateJob,
  getJobs,
  getJobById,
  getTotalCount,
};
