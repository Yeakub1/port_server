import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";
import { ProjectServices } from "./project.services";
import sendResponse from "../../shared/sendResponse";

const getProjects = catchAsync(async (req, res) => {
  const result = await ProjectServices.getProjects();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Projects fetched successfully",
    data: result,
  });
});

const getSingleProject = catchAsync(async (req, res) => {
  const { projectId } = req.params;
  const result = await ProjectServices.getSingleProject(projectId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project fetched successfully",
    data: result,
  });
});

const createProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.createProject(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Project created successfully",
    data: result,
  });
});

const updateProject = catchAsync(async (req, res) => {
  const { projectId } = req.params;
  const result = await ProjectServices.updateProject(projectId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project updated successfully",
    data: result,
  });
});

const deleteProject = catchAsync(async (req, res) => {
  const { projectId } = req.params;
  const result = await ProjectServices.deleteProject(projectId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project deleted successfully",
    data: result,
  });
});

export const ProjectController = {
  getProjects,
  getSingleProject,
  createProject,
  updateProject,
  deleteProject,
};
