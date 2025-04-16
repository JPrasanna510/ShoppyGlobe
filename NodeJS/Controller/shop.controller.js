// controllers/shopController.js
import Product from "../Model/product.model.js";
import CartItem from "../Model/cartItem.model.js";
import User from "../Model/User.model.js";
import jwt from "jsonwebtoken";

// Product Controllers
/**
 * GET /products
 * Fetch all available products from the database.
 */
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};
/**
 * GET /products/:id
 * Fetch a single product by its ID.
 */

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
};

// Cart Controllers

/**
 * POST /cart
 * Add a product to the user's cart. If it already exists, increase the quantity.
 */
export const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    // check if product exists
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ error: "Product not found" });

    const existingItem = await CartItem.findOne({
      userId: req.userId,
      productId,
    });
    // Check if item already in cart
    if (existingItem) {
      existingItem.quantity += quantity;
      await existingItem.save();
      return res.json(existingItem);
    }
    // Add new item to cart
    const newItem = await CartItem.create({
      userId: req.userId,
      productId,
      quantity,
    });
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: "Failed to add to cart" });
  }
};
/**
 * PUT /cart/:id
 * Update the quantity of a specific cart item for the user.
 */
export const updateCartItem = async (req, res) => {
  try {
    const { quantity } = req.body;
    const item = await CartItem.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      { quantity },
      { new: true }
    );
    if (!item) return res.status(404).json({ error: "Cart item not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: "Failed to update cart item" });
  }
};
/**
 * DELETE /cart/:id
 * Remove a specific item from the user's cart.
 */
export const deleteCartItem = async (req, res) => {
  try {
    const result = await CartItem.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId,
    });
    if (!result) return res.status(404).json({ error: "Cart item not found" });
    res.json({ message: "Item removed from cart" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete cart item" });
  }
};

// User Controllers

/**
 * POST /auth/register
 * Register a new user with a unique username and email.
 */
export const registerUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const existing = await User.findOne({ username });
    if (existing) return res.status(400).json({ error: "User already exists" });

    const newUser = await User.create({ username, password, email });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: "Registration failed" });
  }
};
/**
 * POST /auth/login
 * Log in a user and return a JWT token if credentials are valid.
 */
export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || user.password !== password)
      return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, "shoppyglobe_secret", {
      expiresIn: "1d",
    });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
};
