import express from "express";
import Product from "../Model/product.model.js";

import jwt from "jsonwebtoken";
import {
  getAllProducts,
  getProductById,
  addToCart,
  updateCartItem,
  deleteCartItem,
  registerUser,
  loginUser,
} from "../Controller/shop.controller.js";

const router = express.Router();

// Middleware to verify token
function verifyToken(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).json({ error: "No token provided" });

  jwt.verify(token, "shoppyglobe_secret", (err, decoded) => {
    if (err) return res.status(401).json({ error: "Invalid token" });
    req.userId = decoded.id;
    next();
  });
}

// Global error handler middleware
function errorHandler(err, req, res, next) {
  console.error("Error: ", err.message);
  res.status(500).json({ error: err.message || "Something went wrong" });
}

// Product routes
router.get("/", getAllProducts);
router.get("/:id", getProductById);
// Product routes
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error adding product", error: err.message });
  }
});

// Cart routes
router.post("/cart", verifyToken, addToCart);
router.put("/cart/:id", verifyToken, updateCartItem);
router.delete("/cart/:id", verifyToken, deleteCartItem);

// Auth routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Apply error handler
router.use(errorHandler);

export default router;
