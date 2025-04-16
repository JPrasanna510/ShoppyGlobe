import express from "express";
import mongoose from "mongoose";

// Import route files
import productRoutes from "./Routes/productRoutes.js";
import authRoutes from "./Routes/authRoutes.js";
import cartRoutes from "./Routes/cartRoutes.js";

const app = express();
const PORT = 5000;
const MONGODB_URI = "mongodb://localhost:27017/"; // Add DB name
const JWT_SECRET = "shoppysecret";

// Middlewares
app.use(express.json()); // For parsing JSON requests

// Route Handling
app.use("/products", productRoutes); // Product routes
app.use("/auth", authRoutes); // Auth routes for login/registration
app.use("/cart", cartRoutes); // Cart routes for cart management

// MongoDB Connection
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
