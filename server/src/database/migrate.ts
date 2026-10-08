import fs from 'fs';
import path from 'path';
import { pool } from '../config/db';

async function migrate() {
  console.log('🚀 Running database migrations...');
  try {
    const schemaPath = path.join(__dirname, 'schema.sql');
    const schemaSql = fs.readFileSync(schemaPath, 'utf8');
    
    await pool.query(schemaSql);
    console.log('✅ PostgreSQL Schema migrated successfully!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

migrate();
