import { prisma } from "../../config/prisma.js";
import type { RegisterDTO } from "./auth.dto.js";
import bcrypt from "bcrypt";

export const registerService = async (userData: RegisterDTO) => {
    try{
        const hashPassword = await bcrypt.hash(userData.password, 10)
        const user = await prisma.user.create({
        data: {
            name: userData.name,
            email: userData.email,
            password: hashPassword
        },
        select: {
            id: true,
            name: true,
            email: true
        }
    })
    return{
        message: "Usuario criado com sucesso!",
        user
    }
    }
    catch(error){
        console.log(error)
        
        return null
    }
}