// ----------------------------
// IMPORTS
// ----------------------------

import type { Request, Response } from "express";
import { db } from "../config/db.js";
import type { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import type { ICategoryDBResponse } from "../models/InterfaceDbCategory.js";
import type { IProductDBResponse } from "../models/InterfaceDbProducts.js";

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

// ---------------------------------
// GET PRODUCTS BY CATEGORY ID
// ---------------------------------
//*** p = products
//*** pcl = product_category_link
//*** c = categories
//*** isNaN = is Not a Number
//*** Try/catch för att hantera databasfel och oväntade serverfel

export const fetchProductsByCategory = async (req: Request, res: Response) => {
  const categoryId = Number(req.params.id);

  if (isNaN(categoryId)) {
    return res.status(400).json({ error: "Invalid category ID" });
  }

  try {
    // Hämta kategoriinfo
    const categorySql = `
      SELECT category_id, category_name
      FROM categories
      WHERE category_id = ?
    `;
    const [categoryRows] = await db.query<ICategoryDBResponse[]>(categorySql, [
      categoryId,
    ]);

    const category = categoryRows[0];

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    // Hämta produkter
    const productSql = `
      SELECT 
        p.product_id,
        p.product_title,
        p.product_description,
        p.product_stock,
        p.product_price,
        p.product_image,
        p.product_created_date
      FROM products AS p
      INNER JOIN product_category_link AS pcl
        ON p.product_id = pcl.product_connect_id
      INNER JOIN categories AS c
        ON c.category_id = pcl.category_connect_id
      WHERE c.category_id = ?
    `;

    const [rows] = await db.query<IProductDBResponse[]>(productSql, [
      categoryId,
    ]);

    //Returnera kategori + produkter
    return res.status(200).json({
      category_id: category.category_id,
      category_name: category.category_name,
      products: rows,
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown server error";

    res.status(500).json({ error: message });
  }
};

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

export const updateCategory = async (req: Request, res: Response) => {
  const categoryId = Number(req.params.id);
  const { category_name } = req.body;

  if (isNaN(categoryId)) {
    return res.status(400).json({ error: "Invalid category ID" });
  }

  if (!category_name) {
    return res.status(400).json({ error: "category_name is required" });
  }

  try {
    // Kontrollera att kategorin finns
    const checkSql = `
      SELECT category_id
      FROM categories
      WHERE category_id = ?
    `;
    const [checkRows] = await db.query<RowDataPacket[]>(checkSql, [categoryId]);

    if (checkRows.length === 0) {
      return res.status(404).json({ error: "Category not found" });
    }

    // Uppdatera kategorin
    const updateSql = `
      UPDATE categories
      SET category_name = ?
      WHERE category_id = ?
    `;

    await db.query<ResultSetHeader>(updateSql, [category_name, categoryId]);

    res.status(200).json({
      message: "Category updated",
      updatedCategory: {
        id: categoryId,
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
// DELETE CATEGORY
// -------------------------

export const deleteCategory = async (req: Request, res: Response) => {
  const categoryId = Number(req.params.id);

  if (isNaN(categoryId)) {
    return res.status(400).json({ error: "Invalid category ID" });
  }

  try {
    const sql = `
      DELETE FROM categories
      WHERE category_id = ?
    `;

    const [result] = await db.query<ResultSetHeader>(sql, [categoryId]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json({ message: "Category deleted" });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown server error";

    res.status(500).json({ error: message });
  }
};
