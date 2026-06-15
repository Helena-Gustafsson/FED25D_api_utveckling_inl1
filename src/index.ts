// -------------------------
// INITIAL SETUP
// -------------------------

import "dotenv/config";
import express from "express";
import type { Request, Response } from "express";

const app = express();
const PORT = 3000;

// -------------------------
// ROOT ROUTE
// -------------------------

app.get("/", (req: Request, res: Response) => {
  res.send("E-shop");
});

// -------------------------
// ENABLE JSON BODY PARSING (middleware)
// -------------------------

app.use(express.json());

// -------------------------
// CORS = (Cross-Origin Resource Sharing) (middleware)
// -------------------------

import cors from "cors";
app.use(cors());

// -------------------------
// ROUTES TO DO
// -------------------------

// -------------------------
// START SERVER
// -------------------------

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
