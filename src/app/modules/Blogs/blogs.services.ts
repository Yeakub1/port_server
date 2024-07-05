import prisma from "../../shared/prism";
import { TBlog, TUpdateBlog } from "./blogs.interface";

const getBlogs = async () => {
  const result = await prisma.blog.findMany({});
  return result;
};

const getSingleBlog = async (blogId: string) => {
  const result = await prisma.blog.findUnique({
    where: {
      id: blogId,
    },
  })
  return result;
};

const createBlog = async (payload: TBlog) => {
  const result = await prisma.blog.create({
    data: payload,
  });
  return result;
};

const editBlog = async (blogId: string, payload: TUpdateBlog) => {
  const result = await prisma.blog.update({
    where: {
      id: blogId,
    },
    data: payload,
  });
  return result;
};

const deleteBlog = async (blogId: string) => {
  const result = await prisma.blog.delete({
    where: {
      id: blogId,
    },
  });
  return result;
};

export const BlogsServives = {
  getBlogs,
  getSingleBlog,
  createBlog,
  editBlog,
  deleteBlog,
};
