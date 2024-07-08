// src/index.js
import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { authRouter } from "./routes/auth.route";
import { httpErrorsMiddleware } from "./middlewares/middlewares";
import { tasksRouter } from "./routes/tasks.route";

const app: Express = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use("/auth", authRouter);
app.use("/task", tasksRouter);

app.use(httpErrorsMiddleware);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
