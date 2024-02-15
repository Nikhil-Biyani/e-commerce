import express from "express";
import {registerController} from "../controllers/authController.js";

//create router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post('/register', registerController);

export default router;