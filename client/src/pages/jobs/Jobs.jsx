import { Link } from "react-router-dom";
import JobGrid from "./JobGrid";
import { useState } from "react";
import useJobs from "./hooks/useJobs";

const DEFAULT_PAGESIZE = 10;
const DEFAULT_PAGE = 0;

export default function Jobs() {
  const [pagination, setPagination] = useState({
    pageSize: DEFAULT_PAGESIZE,
    page: DEFAULT_PAGE,
  });
  const result = useJobs(pagination);

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
          onPaginationModelChange={setPagination}
        />
      </main>
    </>
  );
}
