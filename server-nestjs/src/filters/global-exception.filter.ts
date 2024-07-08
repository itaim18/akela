import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { UnauthorizedUserError } from 'src/errors/UnauthorizedUserError';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response
      .status(GlobalExceptionFilter.getStatusCodeByError(exception))
      .send();
  }

  private static getStatusCodeByError(exception: unknown): number {
    if (exception instanceof UnauthorizedUserError)
      return HttpStatus.UNAUTHORIZED;

    return HttpStatus.INTERNAL_SERVER_ERROR;
  }
}
