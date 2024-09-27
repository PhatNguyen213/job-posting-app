const pool = require("./db");

function clearJobTable() {
  return pool.query("DELETE FROM jobs;");
}

function createFixtures() {
  const filledArray = Array.from(Array(50).keys());
  return Promise.all(
    filledArray.map((value) => {
      const title = `Job Title ${value}`;
      const description = `Job Description ${value}`;
      const expiry_date = "22/10/2024";
      return createFixture({ title, description, expiry_date });
    })
  );
}

function createFixture({ title, description, expiry_date }) {
  return pool.query(
    "INSERT INTO jobs (title, description, expiry_date) VALUES($1, $2, TO_DATE($3, 'DD/MM/YYYY')) RETURNING *;",
    [title, description, expiry_date]
  );
}

clearJobTable().then(createFixtures);
