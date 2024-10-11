CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100),
  password VARCHAR(100),
  email VARCHAR(100),
  parent_id INTEGER REFERENCES parents(id), 
  class_grade VARCHAR(50),
  date_of_birth DATE,
  enrollment_date DATE,
  gender VARCHAR(10),
  address VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);