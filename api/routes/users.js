import express from "express";
import User from "../models/Users.js"
import bcrypt from "bcrypt"
import jwt from  "jsonwebtoken"
import dotenv from "dotenv";

const router = express()

dotenv.config();
const secret = process.env.SECRET;


router.get("/", async (req, res) => {
    try{
        const allUsers = await User.find({})
        if(allUsers.length < 0) {
            res.status(402).json("Finns inga användare att hämta")
        }else{  
            res.status(200).json(allUsers)
        }
    }catch(err){
        res.status(500).json(err)
    }
})


//Register 

router.post ('/register', async (req, res) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    try{
        const newUser = new User({
            status: req.body.status,
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
        // Hitta användaren i databasen baserat på det angivna användarnamnet
        const user = await User.findOne({ username: req.body.username });
        const status = user ? user.status : null;

        if (!user) {
            res.status(404).send("Användaren hittades inte");
            return;
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);

        if (!validPassword) {
            res.status(400).send("Fel lösenord");
            return;
        }

        const day = 3600 * 24;
        const payLoad = { userId: user._id };

        let token = jwt.sign(payLoad, secret, { expiresIn: day });
        console.log("signed token: " + token);
        res.send({ id: user._id, token: token, status: status });
    } catch (error) {
        // Om ett fel inträffar, skicka en 500-status och felinformation som JSON
        res.status(500).json(error, "Detta är från senaste");
        
    }
});








export default router