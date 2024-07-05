import { Router } from "express";
import { ProjectController } from "./project.controller";
import auth from "../../middleWare/auth";
import zodValidation from "../../shared/zodValidation";
import { createProjectValidationSchema, updateProjectValidationSchema } from "./project.validation";


const router = Router();

router.get("/projects", ProjectController.getProjects);

router.get("/projects/:projectId", ProjectController.getSingleProject);

router.post(
  "/project",
  auth(),
  zodValidation(createProjectValidationSchema),
  ProjectController.createProject
);

router.put(
  "/project/:projectId",
  auth(),
  zodValidation(updateProjectValidationSchema),
  ProjectController.updateProject
);

router.delete("/project/:projectId", auth(), ProjectController.deleteProject);

export const ProjectRouter = router;
