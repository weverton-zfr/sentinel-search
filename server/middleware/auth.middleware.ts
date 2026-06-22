import type { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"

const authMiddleware = (req: Request, res: Response, next: NextFunction) =>{
    const authHeader = req.headers.authorization
    if(!authHeader){
        return res.status(401).json({
            message: "Token não enviado"
        })
    }
    
    try{
        const [bearer, token] = authHeader.split(" ")
        if (bearer !== "Bearer" || !token) {
         return res.status(401).json({
            message: "Formato do token inválido"
        })
        }
        const JWTSecret = process.env.JWT_SECRET as string
        if(!JWTSecret){
            return res.status(500).json({
            message: "Chave invalida ou inexistente!"
        })
        }
        const decoded = jwt.verify(token, JWTSecret)
        next()
    }
    catch{
         return res.status(401).json({
            message: "Token invalido"
        })
    }
}

export default authMiddleware