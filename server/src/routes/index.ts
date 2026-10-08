import { Router } from 'express';
import productRoutes from './productRoutes';
import categoryRoutes from './categoryRoutes';
import orderRoutes from './orderRoutes';
import userRoutes from './userRoutes';

const router = Router();

// Health Check
router.get('/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'Reflect Fashion PERN API',
    uptime: process.uptime(),
  });
});

// Mount Resource Routes
router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);
router.use('/orders', orderRoutes);
router.use('/users', userRoutes);

export default router;
