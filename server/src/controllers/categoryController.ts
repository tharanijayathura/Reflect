import { Request, Response, NextFunction } from 'express';
import { query } from '../config/db';

export const getCategories = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await query(`
      SELECT c.*, COUNT(p.id) as product_count
      FROM categories c
      LEFT JOIN products p ON c.id = p.category_id
      GROUP BY c.id
      ORDER BY c.display_order ASC
    `);
    res.json({ success: true, count: result.rows.length, data: result.rows });
  } catch (error) {
    next(error);
  }
};

export const getCategoryBySlug = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { slug } = req.params;
    const result = await query(`SELECT * FROM categories WHERE slug = $1`, [slug]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Category not found' });
    }

    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    next(error);
  }
};
