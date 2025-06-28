import { Router } from "express";
import { getAllUsers, registerAnUser } from "../controllers/userController";
import { registerValidator, loginValidator } from "../middlewares/authValidator";

const router = Router();

router.get('/', getAllUsers);
router.post('/register', registerValidator, registerAnUser);


export default router;