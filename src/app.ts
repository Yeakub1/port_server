import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import router from "./app/Routes";
import globalErrorHandlear from "./app/middleWare/globalErrorHandler";

const app: Application = express();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "Developer Portfolio server...",
  });
});

app.use("/api", router);

app.use(globalErrorHandlear);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "API NOT FOUND",
    error: {
      path: req.originalUrl,
      message: "Your Request Path Not Found",
    },
  });
});
export default app;