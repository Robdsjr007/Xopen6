import { Request, Response } from 'express';
import { sql } from "../config/db";
import { User } from "../models/userModel";
import { JWT } from 'jsonwebtoken'
import bcrypt from 'bcrypt';

// password cryptograph function
const hashPassword = async (password: string) => {
    const salt = 12;
    return bcrypt.hash(password, salt)
}

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = (await sql`SELECT email, password FROM users`) as User[];
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error)
    }
}

export const registerAnUser = async (req: Request, res: Response) => {
    try {
        const { email, password }: Pick<User, "email" | "password"> = req.body;

        const password_hash = await hashPassword(password)

        await sql`
            INSERT INTO users (email, password)
            VALUES (${email}, ${password_hash})
        `;
        res.status(201).json("Usuário criado com sucesso!");
    } catch (error) {
        res.status(500).json(error)
    }
};

export const loginAnUser = async (req: Request, res: Response) => {
    try {
        const { email, password }: Pick<User, "email" | "password"> = req.body;

        const [user] = await sql`
            SELECT * FROM users WHERE email = ${email};
        `;

        await bcrypt.compare(password, user.password);
    } catch (error) {

    }
}