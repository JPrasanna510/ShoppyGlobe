import mongoose from "mongoose";
//Schema for User
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Stored as plain text
  role: { type: String, default: "user" },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
