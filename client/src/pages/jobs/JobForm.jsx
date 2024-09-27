import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import classes from "./JobForm.module.css";

export default function JobForm({ form, setForm }) {
  const handleChangeInput = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleChangeDate = (value) => {
    console.log(new Date(value));
    setForm((prev) => ({ ...prev, expiryDate: value }));
  };

  return (
    <div>
      <p className={classes.row}>
        <label className={classes.label} htmlFor="title">
          Job Title
        </label>
        <input
          className={classes.input}
          type="text"
          id="title"
          name="title"
          value={form.title}
          onChange={handleChangeInput}
          required
        />
      </p>
      <p className={classes.row}>
        <label className={classes.label} htmlFor="description">
          Job Description
        </label>
        <input
          className={classes.input}
          type="text"
          id="description"
          name="description"
          value={form.description}
          onChange={handleChangeInput}
          required
        />
      </p>
      <p className={`${classes.row} ${classes["datepicker-row"]}`}>
        <label className={classes.label} htmlFor="description">
          Expiry Date
        </label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            className={classes.input}
            label="Expiry Date"
            value={form.expiryDate}
            onChange={handleChangeDate}
          />
        </LocalizationProvider>
      </p>
    </div>
  );
}
