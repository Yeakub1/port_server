import express from "express";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { SkillsRouter } from "../modules/Skills/skills.route";
import { ProjectRouter } from "../modules/Projects/project.route";

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
  {
    path: "/",
    route: ProjectRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
