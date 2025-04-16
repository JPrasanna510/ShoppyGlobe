// Middleware to verify JWT token for protected routes
import jwt from "jsonwebtoken";

export default function verifyToken(req, res, next) {
  const JWT = req.headers["authorization"];
  const token = JWT && JWT.split(" ")[1];
  if (!token) return res.status(403).json({ error: "No token provided" });

  jwt.verify(token, "shoppyglobe_secret", (err, decoded) => {
    if (err) return res.status(401).json({ error: "Invalid token" });
    req.userId = decoded.id;
    next();
  });
}
