import express from "express";
import "dotenv/config"

const app = express();
const PORT = process.env.SERVER_PORT || 3000

app.use(express.json())

app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`))