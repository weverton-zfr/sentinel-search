import dotenv from "dotenv"
dotenv.config({ quiet: true });

import app from "./app.js"

const PORT = process.env.PORT

app.listen(PORT)

console.log("Servidor rodando na porta " + PORT)