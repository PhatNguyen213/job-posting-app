CREATE DATABASE ph_jobs;

CREATE TABLE jobs (
    id SERIAL PRIMARY KEY,
  title varchar(100),
  description varchar(100),
  expiry_date DATETIME,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
)