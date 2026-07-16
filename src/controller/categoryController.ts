// ----------------------------
// IMPORTS
// ----------------------------

import type { Request, Response } from "express";
import { db } from "../config/db.js";
import type { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import type { ICategoryDBResponse } from "../models/InterfaceDbCategory.js";

// ----------------------------
// GET ALL CATEGORIES
// ----------------------------

export const fetchAllCategories = async (req: Request, res: Response) => {
  try {
    const sql = "SELECT * FROM categories";

    const [rows] = await db.query<ICategoryDBResponse[]>(sql);

    res.status(200).json(rows);
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown server error";

    res.status(500).json({ error: message });
  }
};

// -------------------------
// GET PRODUCTS BY CATEGORY ID
// -------------------------

// -------------------------
// CREATE CATEGORY
// -------------------------

// ----------------------------
// CREATE CATEGORY
// ----------------------------

export const createCategory = async (req: Request, res: Response) => {
  const { category_name } = req.body;

  if (!category_name) {
    return res.status(400).json({ error: "category_name is required" });
  }

  try {
    const sql = `
      INSERT INTO categories (category_name)
      VALUES (?)
    `;

    const [result] = await db.query<ResultSetHeader>(sql, [category_name]);

    res.status(201).json({
      message: "Category created",
      newCategory: {
        id: result.insertId,
        category_name,
      },
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown server error";
    res.status(500).json({ error: message });
  }
};

// -------------------------
// UPDATE CATEGORY
// -------------------------

// -------------------------
// DELETE CATEGORY
// -------------------------
