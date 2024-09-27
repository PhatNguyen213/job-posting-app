const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// app.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Access-Control-Allow-Headers"
//   );
//   next();
// });

const createJob = (body) => {
  const { title, description, expiry_date } = body;
  return pool.query(
    "INSERT INTO jobs (title, description, expiry_date) VALUES($1, $2, TO_DATE($3, 'DD/MM/YYYY')) RETURNING *;",
    [title, description, expiry_date]
  );
};

app.get("/jobs", async (req, res) => {
  const jobs = await pool.query("SELECT * FROM jobs;");
  return res.json(jobs.rows);
});

app.get("/jobs/:id", async (req, res) => {
  const { id } = req.params;
  const jobs = await pool.query("SELECT * FROM jobs WHERE id=$1;", [id]);
  return res.json(jobs.rows);
});

app.post("/jobs", async (req, res) => {
  try {
    console.log(req.body);
    const result = await createJob(req.body);
    return res.json(result.rows[0]);
  } catch (error) {
    console.log("Error creating new job", error);
  }
});

app.listen(6001, () => {
  console.log("Job server started.");
});
