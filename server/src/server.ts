import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { env } from './config/env';
import { testConnection } from './config/db';
import apiRoutes from './routes';
import { notFound } from './middleware/notFound';
import { errorHandler } from './middleware/errorHandler';

const app = express();

// Security and utility middlewares
app.use(helmet());
app.use(cors({
  origin: [env.clientUrl, 'http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(env.isProduction ? 'combined' : 'dev'));

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Reflect Fashion Backend API (PERN Stack)',
    docs: '/api/health',
    version: '1.0.0',
  });
});

// Mount Main API Routes
app.use('/api', apiRoutes);

// Error Handling Middlewares
app.use(notFound);
app.use(errorHandler);

// Start Server
const server = app.listen(env.port, async () => {
  console.log(`\n======================================================`);
  console.log(`🚀 Reflect Fashion API Server running on port ${env.port}`);
  console.log(`🌐 Mode: ${env.nodeEnv}`);
  console.log(`🔗 Health Check: http://localhost:${env.port}/api/health`);
  console.log(`======================================================\n`);

  // Verify DB connection on launch
  await testConnection();
});

// Graceful Shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});

export default app;
