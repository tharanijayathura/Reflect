import fs from 'fs';
import path from 'path';
import { pool } from '../config/db';

async function seed() {
  console.log('🌱 Seeding database with initial catalog...');
  try {
    const seedPath = path.join(__dirname, 'seed.sql');
    const seedSql = fs.readFileSync(seedPath, 'utf8');
    
    await pool.query(seedSql);
    console.log('✅ PostgreSQL Database seeded successfully!');
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

seed();
