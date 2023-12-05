import express from "express";
import Menu from "../models/Menu.js";

const router = express()

// Post an item to the menu
router.post("/", async (req, res) => {
    const newItem = new Menu(req.body)
    try{
        const savedItem = await newItem.save()
        res.status(200).json(savedItem)
    }catch(err){
        res.status(500).json(err)
    }
})

// Get all the items from menu
router.get("/", async (req, res) => {
    try{
        const allMenuItems = await Menu.find({})
        if(allMenuItems.length < 0){
            res.status(402).json("Finns inga maträtter att hämta")
        }else{
            res.status(200).json(allMenuItems)
        }
        
    }catch(err){
        res.status(500).json(err)
    }
})


// Update an item
router.put("/:id", async (req, res) => {
    const itemToUpdate = req.params.id
    try{
         const updatedItem = await Menu.findOneAndUpdate(
            {itemId: itemToUpdate},
            {$set: req.body},
            {new:true}
         )
        if(updatedItem){
            res.status(200).json(`Maträtten med id ${updatedItem.itemId} är uppdaterad nu`)
        }else{
            res.status(404).json(`Finns ingen maträtt med detta id ${updatedItem.itemId}`)
        }
    }catch(err){
        res.status(500).json(err)
    }
})


router.delete("/:id", async (req, res) => {
    const itemToDelete = req.params.id

    try{
         const updatedItem = await Menu.findOneAndDelete(
            {itemId: itemToDelete}
         )
    
        if(updatedItem){
            res.status(200).json(`Maträtten med id ${updatedItem.itemId} är nu borttagen`)
        }else{
            res.status(404).json(`Finns ingen maträtt med detta id ${updatedItem.itemId}`)
        }
    }catch(err){
        res.status(500).json(err)
    }
})

export default router