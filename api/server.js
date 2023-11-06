import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

dotenv.config();
const app = express();

mongoose
    .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
    })

    .catch((error) => {
        console.error("Could not connect to MongoDB:", error);
    });

      //Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.listen(3114, () => {
    console.log("Backend server is running");
});
