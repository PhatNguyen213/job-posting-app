import { Link } from "react-router-dom";
import JobGrid from "./JobGrid";
import { useEffect, useState } from "react";

const initialRows = Array.from(Array(100).keys()).map((num) => ({
  id: num,
  title: `Job ${num}`,
  description: `Job ${num} description`,
  expiry_date: new Date(),
  created_at: new Date(),
  updated_at: new Date(),
}));

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:6001/jobs", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then(async (response) => {
        const data = await response.json();
        console.log(data);
        setJobs(
          data.map(
            ({
              expiry_date: date,
              created_at: created,
              updated_at: updated,
              ...rest
            }) => ({
              ...rest,
              expiry_date: new Date(date),
              created_at: new Date(created),
              updated_at: new Date(updated),
            })
          )
        );
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <header>
        <Link to="/jobs/new">Create</Link>
        <h1>All Jobs</h1>
      </header>
      <main>
        <JobGrid rows={jobs} setRows={setJobs} />
      </main>
    </>
  );
}
