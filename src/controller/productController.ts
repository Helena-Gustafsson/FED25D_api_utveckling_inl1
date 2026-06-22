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

export const fetchProduct = async (req: Request, res: Response) => {
  console.log(req.params);
  const id: number = Number(req.params.id);

  try {
    const [rows] = await db.query<IProductDBResponse[]>(
      `
      SELECT *
      FROM products
      WHERE products.product_id = ?
    `,
      [id],
    );

    const product = rows[0];
    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    res.json(await formattedProduct(rows, id));
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({ error: message });
  }
};

//
const formattedProduct = async (
  rows: IProductDBResponse[],
  product_id: number,
) => {
  const productRow = rows[0]!;

  return {
    product_id: productRow.product_id,
    product_title: productRow.product_title,
    product_description: productRow.product_description,
    product_stock: productRow.product_stock,
    product_price: productRow.product_price,
    product_image: productRow.product_image,
    product_created_date: productRow.product_created_date,
  };
};

// -------------------------
// CREATE PRODUCT
// -------------------------

// -------------------------
// UPDATE PRODUCT
// -------------------------

// -------------------------
// DELETE PRODUCT
// -------------------------
