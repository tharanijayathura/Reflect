import { Request, Response } from 'express';

export const notFound = (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: `Resource not found on route: ${req.method} ${req.originalUrl}`,
  });
};
