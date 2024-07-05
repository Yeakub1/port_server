import { Router } from "express";
import { BlogsController } from "./blogs.controller";
import auth from "../../middleWare/auth";
import zodValidation from "../../shared/zodValidation";
import {
  createBlogValidationSchema,
  updateBlogValidationSchema,
} from "./blogs.validation";

const router = Router();

router.get("/blogs", BlogsController.getBlogs);

router.get("/blog/:blogId", BlogsController.getSingleBlog);

router.post(
  "/blog",
  auth(),
  zodValidation(createBlogValidationSchema),
  BlogsController.createBlog
);

router.put(
  "/blog/:blogId",
  auth(),
  zodValidation(updateBlogValidationSchema),
  BlogsController.editBlog
);

router.delete("/blog/:blogId", auth(), BlogsController.deleteBlog);

export const BlogsRouter = router;
