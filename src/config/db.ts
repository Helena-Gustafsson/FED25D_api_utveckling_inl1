import mysql from "mysql2/promise";

// -------------------------
// CONNECT TO DB
// -------------------------

export const db = mysql.createPool({
  host: process.env.DB_HOST || "",
  user: process.env.DB_USER || "",
  database: process.env.DB_NAME || "",
  password: process.env.DB_PASSWORD || "",
  port: parseInt(process.env.DB_PORT || "3306"),
});

console.log("DB NAME:", process.env.DB_NAME);

export const connectToDatabase = async () => {
  try {
    await db.getConnection();
    console.log("Connected to DB");
  } catch (error: unknown) {
    console.log("Error connecting to DB: " + error);
  }
};
