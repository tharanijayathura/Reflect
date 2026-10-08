import { Request, Response, NextFunction } from 'express';
import { query } from '../config/db';

export const getProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.query;
    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required' });
    }

    const result = await query(
      `SELECT id, email, full_name, phone, role, created_at FROM users WHERE email = $1`,
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    next(error);
  }
};
