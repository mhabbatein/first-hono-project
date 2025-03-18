import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import type { Env } from '../index';

export const createDb = (env: Env) => {
  const sql = neon(env.DATABASE_URL);
  return drizzle(sql);
};
