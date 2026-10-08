import { Request, Response, NextFunction } from 'express';
import { query } from '../config/db';

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { category, featured, trending, search } = req.query;
    let sql = `
      SELECT p.*, c.slug as category_slug, c.name as category_name
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.id
      WHERE 1=1
    `;
    const params: any[] = [];

    if (category) {
      params.push(category);
      sql += ` AND c.slug = $${params.length}`;
    }

    if (featured === 'true') {
      sql += ` AND p.is_featured = true`;
    }

    if (trending === 'true') {
      sql += ` AND p.is_trending = true`;
    }

    if (search) {
      params.push(`%${search}%`);
      sql += ` AND (p.name ILIKE $${params.length} OR p.description ILIKE $${params.length})`;
    }

    sql += ` ORDER BY p.created_at DESC`;

    const result = await query(sql, params);
    res.json({ success: true, count: result.rows.length, data: result.rows });
  } catch (error) {
    next(error);
  }
};

export const getProductBySlug = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { slug } = req.params;
    const result = await query(
      `
      SELECT p.*, c.slug as category_slug, c.name as category_name,
             COALESCE(
               json_agg(
                 json_build_object(
                   'id', pv.id,
                   'size', pv.size,
                   'color', pv.color,
                   'stock', pv.stock_quantity
                 )
               ) FILTER (WHERE pv.id IS NOT NULL), '[]'
             ) as variants
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.id
      LEFT JOIN product_variants pv ON p.id = pv.product_id
      WHERE p.slug = $1
      GROUP BY p.id, c.slug, c.name
      `,
      [slug]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    next(error);
  }
};

export const getFeaturedProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await query(
      `SELECT p.*, c.slug as category_slug FROM products p LEFT JOIN categories c ON p.category_id = c.id WHERE p.is_featured = true LIMIT 8`
    );
    res.json({ success: true, count: result.rows.length, data: result.rows });
  } catch (error) {
    next(error);
  }
};
