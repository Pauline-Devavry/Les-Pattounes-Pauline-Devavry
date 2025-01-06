import { Router } from "express";
import * as catController from "../controllers/catController.js";

const router = Router();

router.get("/api/cats", catController.getAllCats)
router.get("/api/cats/:id", catController.getOneCat)
router.post("/api/cats", catController.createOneCat)

export default router