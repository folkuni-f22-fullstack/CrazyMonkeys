import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import menuRoute from "./routes/menu.js";
import messagesRoute from "./routes/message.js";
import orderRoute from "./routes/orders.js";
import authRoute from "./routes/users.js";
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

dotenv.config();
const app = express();

mongoose
    .connect(process.env.MONGO_URL, {
        dbName: `FunkyFusion`,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })

    .catch((error) => {
        console.error("Could not connect to MongoDB:", error);
    });

    const whereWeAre = dirname(fileURLToPath(import.meta.url));
    const dist = join(whereWeAre, "../dist");
    app.use(express.static(dist));
    
    app.options("*", (req, res) => {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        res.send();
    });
    
    //Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/menu", menuRoute);
app.use("/api/messages", messagesRoute);
app.use("/api/orders", orderRoute);
app.use("/api/auth", authRoute);

app.listen(3114, () => {
    console.log("Backend server is running");
});
