CREATE TABLE attendance (
  id SERIAL PRIMARY KEY,
  student_id INTEGER REFERENCES students(id),
  date DATE,
  status VARCHAR(10),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);