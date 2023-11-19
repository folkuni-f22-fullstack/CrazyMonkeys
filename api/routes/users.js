import express from "express";
import User from "../models/Users.js"
import bcrypt from "bcrypt"
const router = express()


//Register 

router.post ('/register', async (req, res) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    try{
        const newUser = new User({
            username: req.body.username,
            password: hashedPassword
        })

        const user = await newUser.save()
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }

})


router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({username: req.body.username})
        !user && res.status(404).send("User not found")
        
        
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).send("Wrong password")

        res.status(200).json(user)

    }catch(error){
        res.status(500).json(error)
    }

})

export default router