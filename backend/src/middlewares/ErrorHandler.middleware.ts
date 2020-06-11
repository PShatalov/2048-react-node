import { NextFunction, Request, Response } from "express";
import * as HttpStatus from "http-status-codes";

import { ServerError } from "utils";

/**
 * Express middleware for handle errors and send error message to the client.
 * @param err The error object
 * @param _req The Request
 * @param res The Response
 * @param _next The NextFunction
 */
export async function errorHandlerMiddleware(
  err: ServerError,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  const status = err.status || HttpStatus.INTERNAL_SERVER_ERROR;
  res.status(status).json({
    status,
    message: err.message
  });
}
