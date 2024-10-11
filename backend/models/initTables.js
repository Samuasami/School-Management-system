const fs = require("fs");
const path = require("path");
const pool = require("../config/db");

const initTables = async () => {
  const sqlFiles = [
    "administrators.sql",
    "teachers.sql",
    "parents.sql",
    "students.sql",
    "courses.sql",
    "enrollments.sql",
    "payments.sql",
    "attendance.sql",
  ];

  try {
    for (const file of sqlFiles) {
      const filePath = path.join(__dirname, file);

      let query = fs.readFileSync(filePath, "utf8");

      query = query.replace(/CREATE TABLE /g, "CREATE TABLE IF NOT EXISTS ");

      await pool.query(query);
    }
    console.log("All tables created or already exist successfully");
  } catch (error) {
    console.error("Error initializing tables:", error);
  }
};

module.exports = initTables;
