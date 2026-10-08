import { Request, Response, NextFunction } from 'express';
import { pool, query } from '../config/db';

export const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  const client = await pool.connect();
  try {
    const {
      customerName,
      customerEmail,
      customerPhone,
      shippingAddress,
      city,
      postalCode,
      notes,
      items,
      paymentMethod = 'cod',
      shippingFee = 0,
    } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ success: false, message: 'Order must contain at least one item' });
    }

    await client.query('BEGIN');

    // Calculate totals
    const subtotal = items.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);
    const totalAmount = subtotal + shippingFee;
    const orderNumber = `RF-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`;

    // Insert Order
    const orderResult = await client.query(
      `
      INSERT INTO orders (
        order_number, customer_name, customer_email, customer_phone,
        shipping_address, city, postal_code, notes, subtotal,
        shipping_fee, total_amount, payment_method, order_status
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, 'processing')
      RETURNING *
      `,
      [
        orderNumber, customerName, customerEmail, customerPhone,
        shippingAddress, city, postalCode, notes, subtotal,
        shippingFee, totalAmount, paymentMethod
      ]
    );

    const order = orderResult.rows[0];

    // Insert Order Items
    for (const item of items) {
      await client.query(
        `
        INSERT INTO order_items (
          order_id, product_id, product_name, size, color, unit_price, quantity, line_total
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        `,
        [
          order.id, item.productId || null, item.name, item.size,
          item.color, item.price, item.quantity, item.price * item.quantity
        ]
      );
    }

    await client.query('COMMIT');
    res.status(201).json({ success: true, message: 'Order created successfully', data: order });
  } catch (error) {
    await client.query('ROLLBACK');
    next(error);
  } finally {
    client.release();
  }
};

export const getOrderById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const orderResult = await query(`SELECT * FROM orders WHERE id = $1 OR order_number = $1`, [id]);
    
    if (orderResult.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    const order = orderResult.rows[0];
    const itemsResult = await query(`SELECT * FROM order_items WHERE order_id = $1`, [order.id]);

    res.json({ success: true, data: { ...order, items: itemsResult.rows } });
  } catch (error) {
    next(error);
  }
};
