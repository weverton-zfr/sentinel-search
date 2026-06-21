import { Router } from "express";
import { registerController } from "./auth.controller.js";

const authRoutes = Router()

authRoutes.post("/auth", registerController)

export default authRoutes