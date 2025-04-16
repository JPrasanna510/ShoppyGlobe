import express from "express";
import { registerUser, loginUser } from "../Controller/shop.controller.js";

const router = express.Router();

// Routes for authentication
router.post("/register", registerUser); // Register a new user
router.post("/login", loginUser); // Login and get JWT

export default router;
