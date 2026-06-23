import jwt, { type SignOptions } from "jsonwebtoken";
import { prisma } from "../../config/prisma.js";
import type { LoginDTO, RegisterDTO } from "./auth.dto.js";
import bcrypt from "bcrypt";

export const registerService = async (userData: RegisterDTO) => {
  try {
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email: userData.email
      }
    })

    if (userAlreadyExists) {
      return {
        success: false,
        message: "Este e-mail já está cadastrado!"
      }
    }

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

    return {
      success: true,
      message: "Usuário criado com sucesso!",
      user
    }
  } catch (error) {
    console.log(error)

    return {
      success: false,
      message: "Erro interno ao criar usuário"
    }
  }
}

export const loginService = async (userData: LoginDTO) => {
  try{
    const jwtSecret = process.env.JWT_SECRET;

    const jwtExpiresIn = (process.env.JWT_EXPIRES_IN ?? "1d") as NonNullable<
    SignOptions["expiresIn"]
    >;

    if (!jwtSecret) {
      throw new Error("JWT_SECRET não foi definido no .env");
    }

    const user = await prisma.user.findUnique({
      where : {
        email: userData.email
      }
    })
    if(!user){
      return null
    }

    const isPasswordValid  = await bcrypt.compare(userData.password, user.password)

    if(!isPasswordValid ){
      return null
    }
    const token = jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
    },
      jwtSecret,
    {
      expiresIn: jwtExpiresIn,
    }
    );
    return {
      message: "Login efetuado com sucesso!",
       user: {
        id: user.id,
        name: user.name,
        email: user.email
      },
      token
    };
  }
  catch(error){
    console.log(error)
    return null
  }
}