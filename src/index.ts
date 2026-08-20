// -------------------------
// INITIAL SETUP
// -------------------------

import "dotenv/config";
import express from "express";
import type { Request, Response } from "express";
import productRouter from "./routers/productRouter.js";
import categoryRouter from "./routers/categoryRouter.js";

const app = express();
const PORT = 3000;

// -------------------------
// ROOT ROUTE
// -------------------------

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Welcome to the Music Shop API" });
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
// ROUTES
// -------------------------

app.use("/products", productRouter);
app.use("/categories", categoryRouter);

// -------------------------
// START SERVER
// -------------------------

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
