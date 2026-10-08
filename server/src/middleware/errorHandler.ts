import { Request, Response, NextFunction } from 'express';
import { env } from '../config/env';

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  console.error(`🚨 [Error] ${req.method} ${req.originalUrl}:`, err);

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
    stack: env.isProduction ? undefined : err.stack,
  });
};
