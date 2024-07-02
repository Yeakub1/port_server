import prisma from "../../shared/prism";
import { TSkill } from "./skills.interface";

const createSkill = async (payload: TSkill) => {
  const result = await prisma.skill.create({
    data: payload,
  });
  return result;
};

const getSkills = async () => {
  const result = await prisma.skill.findMany({});
  return result;
};

const deleteSkill = async (skillId: string) => {
  const result = await prisma.skill.delete({
    where: {
      id: skillId,
    },
  });
  return result;
};

export const SkillsServices = {
  getSkills,
  createSkill,
  deleteSkill,
};
