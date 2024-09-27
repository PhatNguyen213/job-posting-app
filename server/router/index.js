"use strict";

const express = require("express");
const jobRouter = require("./jobs");
const router = express.Router();
const prefix = "/v1/api";

router.use(`${prefix}/jobs`, jobRouter);

module.exports = router;
