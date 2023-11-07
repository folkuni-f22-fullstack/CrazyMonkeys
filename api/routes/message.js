import express from "express"
import Messages from "../models/Messages.js"

const router = express()

// Routes

// GET all messages
router.get("/", async (req, res) => {

    try {
        const selectedMessage = await Messages.find({});
    
        if (selectedMessage) {
          console.log(`Hittade meddelandet: ${selectedMessage}`);
          res.status(200).send(selectedMessage);
        } else {
          res.sendStatus(404);
        }
      } catch (error) {
        console.error(error);
        res.status(500).send(error);
      }
})

// POST 
router.post("/", async (req, res) => {
    const newMsg = new Messages(req.body)

    try {
        const savedMsg = await newMsg.save()
        res.status(200).json(savedMsg)
    } catch (error) {
        res.status(500).json(error)
    }
})

export default router

// Victor B was here
// Agreed / Ali