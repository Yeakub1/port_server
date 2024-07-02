import express from "express";
import { AuthController } from "./auth.controller";
import { AuthValidation } from "./auth.validation";
import zodValidation from "../../shared/zodValidation";

const router = express.Router();

router.post(
  "/register",
  zodValidation(AuthValidation.RegisterValidation),
  AuthController.createUser
);
router.post(
  "/login",
  zodValidation(AuthValidation.loginValidation),
  AuthController.loginUser
);


export const AuthRoutes = router;
