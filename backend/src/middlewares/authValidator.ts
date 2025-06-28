import { body } from "express-validator";

export const registerValidator = [
    body("email")
        .isEmail().withMessage("E-mail inválido")
        .normalizeEmail(),
    body("password")
        .isLength({ min: 8}).withMessage("Senha deve ter pelo menos 8 caracteres")
        .matches(/[A-Z]/).withMessage("Deve conter 1 letra maiúscula")
        .matches(/\d/).withMessage("Deve conter 1 número")
]

export const loginValidator = [
    body("email")
        .isEmail().withMessage("E-mail inválido")
        .normalizeEmail(),
    body("password")
        .notEmpty().withMessage("Senha obrigatória"),
]