import express from "express";
import User from "../models/Users.js"
import bcrypt from "bcrypt"
import jwt from  "jsonwebtoken"
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
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(404).send("User not found");
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).send("Wrong password");
        }

        // Skapa ett JWT-token
        const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '2h' });

        // Skicka tillbaka token till frontend
        res.status(200).json({ token, user: { username: user.username, /* andra användarattribut */ } });
    } catch (error) {
        res.status(500).json(error);
    }
});







export default router