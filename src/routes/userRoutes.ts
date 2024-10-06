import express from "express";
import { getUsers, createUser } from "../controllers/userController";
import { body } from "express-validator";
import { protect, authorize } from '../middlewares/authMiddleware';

const router = express.Router();

router.get("/", protect, authorize(['admin']), getUsers);
router.post(
  "/",
  [
    body("name").not().isEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  createUser
);

export default router;
