import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import JobForm from "./JobForm";
import { getJobById, updateJob } from "../../services/job-service";
import dayjs from "dayjs";
import classes from "./Job.module.css";
import Button from "../../components/buttons";

export default function EditJob() {
  const { jobId } = useParams();
  const [form, setForm] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await getJobById(jobId);
      const job = await response.json();
      const expiryDate = dayjs(job.expiry_date);
      setForm({ ...job, expiryDate });
    })();
  }, [jobId]);

  const submit = async () => {
    console.log(form);
    const response = await updateJob(form);
    const newJob = await response.json();
    navigate(`/jobs`);
  };

  if (!form) return null;

  return (
    <div className={classes.main}>
      <header>
        <Link to="/jobs">Back</Link>
        <h1>Edit Job {form.title}</h1>
      </header>
      <main>
        <JobForm form={form} setForm={setForm} />
        <Button onClick={submit}>Update</Button>
      </main>
    </div>
  );
}
