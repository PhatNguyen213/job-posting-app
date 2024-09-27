const pool = require("./db");

async function createFixtures() {
  const filledArray = Array.from(Array(100).keys());
  return Promise.all(
    filledArray.map((value) => {
      const title = `Job Title ${value}`;
      const description = `Job Description ${value}`;
      const expiry_date = "22/10/2024";
      return createFixture({ title, description, expiry_date });
    })
  );
}

async function createFixture({ title, description, expiry_date }) {
  return pool.query(
    "INSERT INTO jobs (title, description, expiry_date) VALUES($1, $2, TO_DATE($3, 'DD/MM/YYYY')) RETURNING *;",
    [title, description, expiry_date]
  );
}

createFixtures();
