import { useEffect, useState } from "react";
import { getJobs } from "../../../services/job-service";
import dayjs from "dayjs";

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

export default function useJobs(pagination) {
  const [result, setResult] = useState({ totalCount: 0, reuslt: [] });

  useEffect(() => {
    (async () => {
      try {
        const response = await getJobs(pagination);
        const { totalCount, result } = await response.json();
        setResult({
          totalCount,
          result: transformResult(result),
        });
      } catch (error) {
        console.log("Error fetching jobs");
      }
    })();
  }, [pagination]);

  return result;
}
