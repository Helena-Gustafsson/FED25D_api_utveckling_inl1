// -------------------------
// IMPORTS
// -------------------------

import type { Request, Response } from "express";
import { db } from "../config/db.js";
import type { ResultSetHeader, RowDataPacket } from "mysql2/promise";
//TO DO import { fetchCategories } from "../db/reviewDb.js";
import type { IProductDBResponse } from "../models/InterfaceDbProducts.js";

// -------------------------
// GET ALL PRODUCTS
// search + sort
// -------------------------

export const fetchAllProducts = async (req: Request, res: Response) => {
  const search = req.query.search as string;
  const sort = req.query.sort as string;

  // DEFAULT ORDER ASCENDING
  let order = "ASC";
  if (req.query.order && req.query.order.toString().toUpperCase() === "DESC") {
    order = "DESC";
  }

  const allowedSortFields = ["product_id", "product_title", "product_price"];

  //SQL
  let sql = "SELECT * FROM products";
  const values: any[] = [];

  // SEARCH
  if (search) {
    sql += " WHERE product_title LIKE ?";
    values.push(`%${search}%`);
  }

  // SORT
  if (sort && allowedSortFields.includes(sort)) {
    sql += ` ORDER BY ${sort} ${order}`;
  }

  // RUN QUERY
  try {
    const [results] = await db.query<IProductDBResponse[]>(sql, values);
    res.json(results);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({ error: message });
  }
};

// -------------------------
// GET ONE PRODUCT BY ID
// -------------------------

// -------------------------
// CREATE PRODUCT
// -------------------------

// -------------------------
// UPDATE PRODUCT
// -------------------------

// -------------------------
// DELETE PRODUCT
// -------------------------
