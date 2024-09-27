import { Link, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { useState } from "react";
import { createJob } from "../../services/job-service";
import JobForm from "./JobForm";
import classes from "./Job.module.css";
import Button from "../../components/buttons";

export default function CreateJob() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    expiryDate: dayjs("30/09/2024"),
  });
  const navigate = useNavigate();

  const submit = async () => {
    const response = await createJob(form);
    const newJob = await response.json();
    navigate("/jobs");
  };

  return (
    <div className={classes.main}>
      <header>
        <Link to="/jobs">Back</Link>
        <h1>Create Job</h1>
      </header>
      <main>
        <JobForm form={form} setForm={setForm} />
        <Button onClick={submit}>Create</Button>
      </main>
    </div>
  );
}
