const express = require('express');
const db = require('./db');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, async () => {
  console.log(`Course Signup Server listening at http://localhost:${port}`);
  try {
    await db.sync();
  } catch (err) {
    console.error('Database sync failed:', err);
  }
});
