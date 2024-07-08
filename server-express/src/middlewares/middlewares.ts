import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { UnauthorizedUserError } from "../errors/UnauthorizedUserError";

export const httpErrorsMiddleware: ErrorRequestHandler = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof UnauthorizedUserError) {
    res.status(401).send();
  }

  res.status(500).send();
};
