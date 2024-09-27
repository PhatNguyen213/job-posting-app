import dayjs from "dayjs";
import { get, post, put, remove } from "../api/client";

export const getJobs = ({ page, pageSize }) => {
  const url = `jobs?page=${page + 1}&pageSize=${pageSize}`;
  return get(url);
};

export const getJobById = (id) => {
  const url = `jobs/${id}`;
  return get(url);
};

export const createJob = ({ title, description, expiryDate }) => {
  const url = `jobs`;
  const body = {
    title,
    description,
    expiry_date: dayjs(expiryDate).format("DD/MM/YYYY"),
  };
  return post(url, body);
};

export const updateJob = ({ id, title, description, expiryDate }) => {
  const url = `jobs`;
  const body = {
    id,
    title,
    description,
    expiry_date: dayjs(expiryDate).format("DD/MM/YYYY"),
  };
  return put(url, body);
};

export const deleteJob = (id) => {
  const url = `jobs/${id}`;
  return remove(url);
};
