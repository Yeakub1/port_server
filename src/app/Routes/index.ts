import express from "express";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { SkillsRouter } from "../modules/Skills/skills.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/",
    route: AuthRoutes,
  },
  {
    path: "/",
    route: SkillsRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
