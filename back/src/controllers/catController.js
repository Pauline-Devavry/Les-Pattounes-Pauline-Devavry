import { Cat } from "../models/Cat.js";

// Méthode pour récupérer tous les chats
export async function getAllCats(req,res) {

    const cats = await Cat.findAll();
    return cats;
    
}

// Méthode pour récupérer un chat par son ID
export async function getOneCat(req, res, next) {
    const id = Number(req.params.id);
    const CatId = await Cat.findByPk(id);
    if (CatId) {
        res.json(CatId).status(200);
    } else {
        next();
    }
}

// Méthode pour créer un chat

// Méthode pour supprimer un chat

// Méthode pour modifier un chat
