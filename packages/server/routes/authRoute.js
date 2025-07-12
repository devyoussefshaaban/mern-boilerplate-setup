import { Router } from "express";
import {
  confirmEmail,
  getUserInfo,
  loginUser,
  registerUser,
  updateMyProfile,
} from "../controllers/authController.js";
import { auth } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", auth, getUserInfo);
router.patch("/my-profile", auth, updateMyProfile);
router.get("/confirm-email", confirmEmail);

export default router;
