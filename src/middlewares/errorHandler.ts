import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

// export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
//   console.error(err.stack);
//   res.status(500).json({ message: err.message });
// };