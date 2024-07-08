import { NextFunction, Request, Response } from "express";
import { LoginQueryParams } from "./types/types";
import { authService } from "../services/auth.service";

const login = (
  req: Request<{}, {}, {}, LoginQueryParams>,
  res: Response,
  next: NextFunction,
) => {
  const { username, password } = req.query;

  try {
    authService.login(username, password);

    res.send();
  } catch (error: unknown) {
    next(error);
  }
};

export const authController = {
  login,
};
