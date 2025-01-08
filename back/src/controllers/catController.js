import { Cat } from "../models/Cat.js";
import Joi from "joi";

// Méthode pour récupérer tous les chats
export async function getAllCats(req,res) {

    try {
        const cats = await Cat.findAll();
        console.log("Tous les chats récupérés : ", cats);
        res.status(200).json(cats); // Renvoie la liste des chats avec un code de succès 200
    } catch (error) {
        console.log("Erreur lors de la récupération des chats : ", error);
        res.status(500).json({ error: "Une erreur est survenue lors de la récupération des chats." }); // Gère l'erreur
    }
}

// Méthode pour récupérer un chat par son ID
export async function getOneCat(req, res, next) {
    const id = Number(req.params.id);
    const CatId = await Cat.findByPk(id);
    if (CatId) {
        res.json(CatId).status(200);
    } else {
        res.status(404).json({ message: "Chat non trouvé" }); 
    }

}

// Méthode pour créer un chat
export async function createOneCat(req, res, next) {

    console.log(req.body)

    const catSchema = Joi.object({
     // id: Joi.number().integer().positive().optional(),
      name: Joi.string().max(50).required(),
      age: Joi.number(),
      description: Joi.string(),
      adoption_status: Joi.string().valid('Disponible', 'Adopté', 'Réservé').required(),
      image_url: Joi.string().max(255),
     
    });
  
    const { error, value } = catSchema.validate(req.body);
    if (error) {
      const errorMessage = { message: "Vous devez remplir tous les champs" };
      return res.status(400).json(errorMessage);
    }
  
    const createdOneCat = await Cat.create(value);
  
  
    return res.status(201).json({
      message: "Chat créé avec succès.",
      cat: createdOneCat,
    }); 
  }

// Méthode pour supprimer un chat
export async function deleteOneCat(req, res, next) {
    const id = Number(req.params.id);
    await Cat.destroy({ where: { id: id } });
    res.json("Chat supprimé de votre base de données").status(204);
}

// Méthode pour modifier un chat
export async function updateOneCat(req, res, next) {

    const id = Number(req.params.id);

    const catSchema = Joi.object({
        id: Joi.number().integer().positive().optional(),
        name: Joi.string().max(50).required(),
        age: Joi.number(),
        description: Joi.string(),
        adoption_status: Joi.string().valid('Disponible', 'Adopté', 'Réservé').required(),
        image_url: Joi.string().max(255),
    });
    
    const { error } = catSchema.validate(req.body);
    if (error) {
        return res.status(400).json({error});
    }
    
    const cat = await Cat.findByPk(id);

    if(!cat) return res.status(404).send({erreur: "Chat non trouvé !"})
    
    const updatedOneCat = await cat.update(req.body);
    
    return res.status(200).json({
        message: "Chat mis à jour avec succès",
        cat: updatedOneCat,
    });
}