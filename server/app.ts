import express from "express"
import cors from "cors"
import authRoutes from "./modules/auth/auth.routes.js"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", authRoutes)

export default app
