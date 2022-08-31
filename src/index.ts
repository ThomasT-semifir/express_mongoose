import express from "express";
import "dotenv/config"
import {router as userRouter} from './routes/user.router'
import { setMongoConnection } from "./config/mongo.config";

const app = express();
const PORT = process.env.SERVER_PORT || 3000

app.use(express.json())
app.use("/users", userRouter)

setMongoConnection()
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`))