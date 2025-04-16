import express from "express";
import {
  addToCart,
  updateCartItem,
  deleteCartItem,
} from "../Controller/shop.controller.js";
import verifyToken from "../middleware/verifyToken.js"; // Middleware for token verification

const router = express.Router();

// Routes for managing cart items
router.post("/", verifyToken, addToCart); // Add to cart
router.put("/:id", verifyToken, updateCartItem); // Update cart item
router.delete("/:id", verifyToken, deleteCartItem); // Delete cart item

export default router;
