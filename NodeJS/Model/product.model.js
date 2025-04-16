import mongoose from "mongoose";
//Schema for Product
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  stock: { type: Number, required: true },
  thumbnail: { type: String },
});

export default mongoose.model("Product", productSchema);
