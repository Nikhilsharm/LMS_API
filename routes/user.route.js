import express from "express";
import { register,login,logout,getUserProfile,Userdispaly } from "../controller/user.controller.js";
import {isAuthenticated} from "../middlewares/isAuthenticated.js"
const router =express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/UserDisplay").get(Userdispaly);
router.route("/Profile").get(isAuthenticated, getUserProfile);


export default router;