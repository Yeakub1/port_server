import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";
import { BlogsServives } from "./blogs.services";
import sendResponse from "../../shared/sendResponse";

const createBlog = catchAsync(async (req, res) => {
  const result = await BlogsServives.createBlog(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Blog created successfully",
    data: result,
  });
});

const getSingleBlog = catchAsync(async (req, res) => {
  const { blogId } = req.params;
  const result = await BlogsServives.getSingleBlog(blogId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blogs fetched successfully",
    data: result,
  });
});

const getBlogs = catchAsync(async (req, res) => {
  const result = await BlogsServives.getBlogs();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blogs fetched successfully",
    data: result,
  });
});

const editBlog = catchAsync(async (req, res) => {
  const { blogId } = req.params;
  const result = await BlogsServives.editBlog(blogId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog updated successfully",
    data: result,
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  const { blogId } = req.params;
  const result = await BlogsServives.deleteBlog(blogId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog deleted successfully",
    data: result,
  });
});

export const BlogsController = {
  getBlogs,
  getSingleBlog,
  createBlog,
  editBlog,
  deleteBlog,
};
