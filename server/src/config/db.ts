import { Pool, QueryResult, QueryResultRow } from 'pg';
import { env } from './env';

// Create a singleton PostgreSQL connection pool
export const pool = new Pool({
  connectionString: env.databaseUrl,
  ssl: env.isProduction ? { rejectUnauthorized: false } : false,
  max: 20, // Max concurrent connections in pool
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
});

// Event listeners for pool monitoring
pool.on('connect', () => {
  if (!env.isProduction) {
    console.log('📦 PostgreSQL client connected to pool');
  }
});

pool.on('error', (err) => {
  console.error('❌ Unexpected error on idle PostgreSQL client', err);
});

/**
 * Helper function to run parameterized SQL queries safely
 */
export const query = async <T extends QueryResultRow = any>(
  text: string,
  params?: any[]
): Promise<QueryResult<T>> => {
  const start = Date.now();
  try {
    const res = await pool.query<T>(text, params);
    const duration = Date.now() - start;
    if (!env.isProduction) {
      console.log('⚡ Executed query', { text: text.slice(0, 80), duration: `${duration}ms`, rows: res.rowCount });
    }
    return res;
  } catch (error) {
    console.error('❌ Database query error:', { text, error });
    throw error;
  }
};

/**
 * Test the database connection
 */
export const testConnection = async (): Promise<boolean> => {
  try {
    const res = await pool.query('SELECT NOW() as current_time');
    console.log('✅ PostgreSQL Database connected successfully at:', res.rows[0].current_time);
    return true;
  } catch (err: any) {
    console.warn('⚠️  Could not connect to PostgreSQL database:', err.message);
    console.warn('ℹ️  Ensure PostgreSQL is running and DATABASE_URL is properly configured in server/.env');
    return false;
  }
};
