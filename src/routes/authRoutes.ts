import express from "express";
import { body } from "express-validator";
import { register, login } from "../controllers/authController";

const router = express.Router();

router.post(
  "/register",
  [
    body("name").not().isEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Please provide a valid email address"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("role").optional().isIn(["user", "admin"]).withMessage("Invalid role"),
  ],
  register
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Please provide a valid email address"),
    body("password").not().isEmpty().withMessage("Password is required"),
  ],
  login
);

export default router;
