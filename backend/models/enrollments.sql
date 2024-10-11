CREATE TABLE enrollments (
  id SERIAL PRIMARY KEY,
  student_id INTEGER REFERENCES students(id), 
  course_id INTEGER REFERENCES courses(id),  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);