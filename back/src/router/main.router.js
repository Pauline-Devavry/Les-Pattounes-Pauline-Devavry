import { Router } from "express";
import catsRouter from "../router/cat.router.js"

const router = Router()

router.use(catsRouter)

export default router