import { Link, useParams } from "react-router-dom";

export default function EditJob() {
  const { jobId } = useParams();
  console.log(jobId);
  return (
    <>
      <header>
        <Link to="/jobs">Back</Link>
        <h1>Edit Job</h1>
      </header>
      <main></main>
    </>
  );
}
