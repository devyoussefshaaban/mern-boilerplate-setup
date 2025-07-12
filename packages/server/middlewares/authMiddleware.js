import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  let token;
  const headerAuth = req.headers.authorization;

  try {
    if (headerAuth && headerAuth.startsWith("Bearer")) {
      token = headerAuth.split(" ")[1];

      const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);

      req.user = await User.findById(decode.userId);

      next();
    } else {
      throw new Error("Not authorized, no token.");
    }
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};

export { auth };
