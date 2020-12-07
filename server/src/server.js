const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const accessControl = require('./middleware/access-control');
const errorHandler = require('./middleware/error-handler');
const coursesRouter = require('./routers/courses');
const sectionsRouter = require('./routers/sections');
const db = require('./db');

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(accessControl);

app.use('/courses', coursesRouter);
app.use('/sections', sectionsRouter);

app.use(errorHandler);

app.listen(port, async () => {
  console.log(`Course Signup Server listening at http://localhost:${port}`);
  try {
    await db.sync();
  } catch (err) {
    console.error('Database sync failed:', err);
  }
});
