import { Request, Response } from 'express';
import { sql } from "../config/db";
import { User } from "../models/userModel";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = (await sql`SELECT email FROM users`) as User[];
        res.status(200).json(users);
    } catch (error) {
        console.error("Erro ao executar a query: ", error);
    }
};