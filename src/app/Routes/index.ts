import express from "express";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { SkillsRouter } from "../modules/Skills/skills.route";
import { ProjectRouter } from "../modules/Projects/project.route";
import { BlogsRouter } from "../modules/Blogs/blogs.route";

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
  {
    path: "/",
    route: BlogsRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
