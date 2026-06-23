import type { Request, Response } from "express";
import type { LoginDTO, RegisterDTO } from "./auth.dto.js";
import { loginService, registerService } from "./auth.service.js";

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
    return res.json({
        registerResult
    })
}

export const loginController = async (req: Request, res: Response) => {
    const { email, password } = req.body

    if(
    !email || 
    !password || 
    typeof email !== "string" ||
    typeof password !== "string" || 
    !email.trim() || 
    !password.trim())
    {
        return res.status(400).json({
            message: "Preencha todos os campos!"
        })
    }

    const user: LoginDTO = {
        email,
        password
    }

    const loginResult = await loginService(user)
    if(!loginResult){
        return res.status(401).json({
            message: "Email ou senha inválidos"
        })
    }
    return res.status(200).json({
        message: "Login efetuado com sucesso",
        loginResult
    }) 
}