import jwt, { type SignOptions } from "jsonwebtoken";
import { prisma } from "../../config/prisma.js";
import type { RegisterDTO } from "./auth.dto.js";
import bcrypt from "bcrypt";

export const registerService = async (userData: RegisterDTO) => {
  try {
    const jwtSecret = process.env.JWT_SECRET;

    const jwtExpiresIn = (process.env.JWT_EXPIRES_IN ?? "1d") as NonNullable<
      SignOptions["expiresIn"]
    >;

    if (!jwtSecret) {
      throw new Error("JWT_SECRET não foi definido no .env");
    }

    const hashPassword = await bcrypt.hash(userData.password, 10);

    const user = await prisma.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        password: hashPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

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
      message: "Usuário criado com sucesso!",
      user,
      token,
    };
  } catch (error) {
    console.log(error);

    return null;
  }
};