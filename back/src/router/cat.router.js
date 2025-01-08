import { Router } from "express";
import * as catController from "../controllers/catController.js";

const router = Router();

router.get("/api/cats", catController.getAllCats)
router.get("/api/cats/:id", catController.getOneCat)
router.post("/api/cats", catController.createOneCat)
router.delete("/api/cats/:id", catController.deleteOneCat)
router.patch("/api/cats/:id", catController.updateOneCat)


export default router