import httpStatus from "http-status";
import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { SkillsServices } from "./skills.services";
import sendResponse from "../../shared/sendResponse";

const getSkills = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillsServices.getSkills();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skills fetched successfully",
    data: result,
  });
});

const createSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillsServices.createSkill(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Skill created successfully",
    data: result,
  });
});

const deleteSkill = catchAsync(async (req: Request, res: Response) => {
  const { skillId } = req.params;
  const result = await SkillsServices.deleteSkill(skillId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skill deleted successfully",
    data: result,
  });
});

export const SkillsController = {
  getSkills,
  createSkill,
  deleteSkill,
};
