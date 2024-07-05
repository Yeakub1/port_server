import prisma from "../../shared/prism";
import { TProject, TUpdateProject } from "./project.interface";

const getProjects = async () => {
  const result = await prisma.project.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });
  return result;
};

const getSingleProject = async (projectId: string) => {
  const result = await prisma.project.findUnique({
    where: {
      id: projectId,
    },
  });
  return result;
};

const createProject = async (payload: TProject) => {
  const result = await prisma.project.create({
    data: payload,
  });
  return result;
};

const updateProject = async (projectId: string, payload: TUpdateProject) => {
  const result = await prisma.project.update({
    where: {
      id: projectId,
    },
    data: payload,
  });
  return result;
};

const deleteProject = async (projectId: string) => {
  const result = await prisma.project.delete({
    where: {
      id: projectId,
    },
  });
  return result;
};

export const ProjectServices = {
  getProjects,
  getSingleProject,
  createProject,
  updateProject,
  deleteProject,
};
