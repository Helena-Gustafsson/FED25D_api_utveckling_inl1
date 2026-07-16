import express from "express";

import {
  fetchAllCategories,
  fetchProductsByCategory,
  createCategory,
  updateCategory,
  //deleteCategory,
} from "../controller/categoryController.js";

const router = express.Router();

router.get("/", fetchAllCategories);
router.get("/:id/products", fetchProductsByCategory);
router.post("/", createCategory);
router.patch("/:id", updateCategory);
//router.delete("/:id", deleteCategory);

export default router;
