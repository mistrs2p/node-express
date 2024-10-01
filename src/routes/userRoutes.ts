import express from "express";
import { getUsers, createUser } from "../controllers/userController";
import { body } from "express-validator";

const router = express.Router();

router.get("/", getUsers);
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
