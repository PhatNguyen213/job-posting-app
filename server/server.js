require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./router");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log("Job server started.");
});
