import express from "express";
import { login, logout, signUp } from "../controller/auth.controller.js";

const authRouter = express.Router()

authRouter.post("/signup", signUp);
authRouter.post("/login", login);
authRouter.get("/logout", logout);


export default authRouter;