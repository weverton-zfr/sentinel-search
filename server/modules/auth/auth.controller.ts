import type { Request, Response } from "express";
import type { RegisterDTO } from "./auth.dto.js";
import { registerService } from "./auth.service.js";

export const registerController = async (req: Request, res: Response) => {
    const { name, email, password } = req.body
    if(!name || !email || !password || !name.trim() || !email.trim() || !password.trim()){
        return res.status(400).json({
            message: "Erro! Dados invalidos ou inexistentes!"
        })
    }
    const user : RegisterDTO = {
        name,
        email,
        password
    }
    const registerResult = await registerService(user)
    if(!registerResult){
        return res.status(400).json({
            message: "Erro ao criar usuario"
        })
    }
    return res.status(201).json({
        message: "Usuario criado com sucesso",
        registerResult
    })
}