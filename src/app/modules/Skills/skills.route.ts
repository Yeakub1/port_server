import { Router } from "express";
import { SkillsController } from "./skills.controller";
import auth from "../../middleWare/auth";
import zodValidation from "../../shared/zodValidation";
import { skillValidationSchema } from "./skills.validation";

const router = Router();

router.post(
  "/skills",
  auth(),
  zodValidation(skillValidationSchema),
  SkillsController.createSkill
);

router.get("/skills", SkillsController.getSkills);

router.delete("/skills/:skillId", auth(), SkillsController.deleteSkill);

export const SkillsRouter = router;
