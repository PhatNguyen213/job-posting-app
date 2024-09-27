import { Link } from "react-router-dom";
import JobGrid from "./JobGrid";
import { useEffect, useState } from "react";

const DEFAULT_PAGESIZE = 10;
const DEFAULT_PAGE = 0;

export default function Jobs() {
  const [result, setResult] = useState({ totalCount: 0, reuslt: [] });
  const [pagination, setPagination] = useState({
    pageSize: DEFAULT_PAGESIZE,
    page: DEFAULT_PAGE,
  });

  useEffect(() => {
    const { page, pageSize } = pagination;
    fetch(
      `http://localhost:6001/v1/api/jobs?page=${page + 1}&pageSize=${pageSize}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then(async (response) => {
        const { totalCount, result } = await response.json();
        setResult({
          totalCount,
          result: result.map(
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
          ),
        });
      })
      .catch((err) => console.log(err));
  }, [pagination]);
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
          setRows={setResult}
        />
      </main>
    </>
  );
}
