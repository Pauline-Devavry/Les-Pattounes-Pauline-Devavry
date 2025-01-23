import { Router } from "express";
import catsRouter from "../router/cat.router.js"
import contactRouter from "../router/contact.router.js"


const router = Router()

// Router pour les Cats
router.use(catsRouter)

// Router pour le formulaire de contact
router.use(contactRouter)


export default router