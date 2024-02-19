import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => c.html(`<h1>Welcome to Hono with Bun!</h1>`));

app.get('/get-data', (c) =>
  c.json({ message: 'This is the loaded content from Hono and Bun!' })
);

app.fire();
