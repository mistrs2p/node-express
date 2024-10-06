import express from "express";
import keygen from "../controllers/keygenController";

const router = express.Router();

router.get("/", keygen);


export default router;
