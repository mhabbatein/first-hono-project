import { products } from './db/schema';
import { Hono } from 'hono';
import { createDb } from './db/db';

export type Env = {
  DATABASE_URL: string;
};

const app = new Hono<{ Bindings: Env }>();

app.get('/', async (c) => {
  try {
    const db = createDb(c.env);

    const result = await db.select().from(products);

    return c.json({
      result,
    });
  } catch (error) {
    console.log(error);
    return c.json(
      {
        error,
      },
      400
    );
  }
});

export default app;
