import jwt from "jsonwebtoken";

export default function authMiddleware(req, res, next) {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.token = decoded;
    return next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" , 'status': 'error'});
  }
}
