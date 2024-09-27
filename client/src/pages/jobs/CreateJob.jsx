import { Link } from "react-router-dom";

export default function CreateJob() {
  return (
    <>
      <header>
        <Link to="/jobs">Back</Link>
        <h1>Create Job</h1>
      </header>
      <main>
        <form>
          <p>
            <label htmlFor="title">Job Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="description">Job Description</label>
            <input type="text" id="description" name="description" required />
          </p>
          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  );
}
