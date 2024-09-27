import { useEffect, useState } from "react";
import { getJobs } from "../../../services/job-service";
import { DEFAULT_PAGE, DEFAULT_PAGESIZE } from "../../../constants";

const transformResult = (result) =>
  result.map(
    ({
      expiry_date: expired,
      created_at: created,
      updated_at: updated,
      ...rest
    }) => ({
      ...rest,
      expiry_date: new Date(expired),
      created_at: new Date(created),
      updated_at: new Date(updated),
    })
  );

export const fetchJobs = async (
  pagination = {
    pageSize: DEFAULT_PAGESIZE,
    page: DEFAULT_PAGE,
  }
) => {
  try {
    const response = await getJobs(pagination);
    const { totalCount, result } = await response.json();
    return {
      totalCount,
      result: transformResult(result),
    };
  } catch (error) {
    console.log("Error fetching jobs", error);
  }
};

export default function useJobs() {
  const [result, setResult] = useState({ totalCount: 0, result: [] });

  useEffect(() => {
    fetchJobs().then(setResult);
  }, []);

  return [result, setResult];
}
