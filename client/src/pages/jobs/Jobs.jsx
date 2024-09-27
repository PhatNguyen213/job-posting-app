import { Link } from "react-router-dom";
import JobGrid from "./JobGrid";
import { useState } from "react";
import useJobs, { fetchJobs } from "./hooks/useJobs";
import { DEFAULT_PAGE, DEFAULT_PAGESIZE } from "../../constants";
import { deleteJob } from "../../services/job-service";

export default function Jobs() {
  const [pagination, setPagination] = useState({
    pageSize: DEFAULT_PAGESIZE,
    page: DEFAULT_PAGE,
  });
  const [result, setResult] = useJobs(pagination);

  const onPaginationChange = (newPagination) => {
    setPagination(newPagination);
    fetchJobs(newPagination).then(setResult);
  };

  const handleDeleteJob = (id) => {
    deleteJob(id)
      .then(() => fetchJobs())
      .then(setResult);
  };

  return (
    <>
      <header>
        <Link to="/jobs/new">Create</Link>
        <h1>All Jobs</h1>
      </header>
      <main>
        <JobGrid
          data={result}
          pagination={pagination}
          onDeleteJob={handleDeleteJob}
          onPaginationModelChange={onPaginationChange}
        />
      </main>
    </>
  );
}
