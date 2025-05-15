const express = require('express');
const app = express();
const tasksRouter = require('./tasks');

app.use(express.json());
app.use('/tasks', tasksRouter);


if (require.main === module) {
  app.listen(5000, () => {
    console.log('Server started on port 5000');
  });
}

module.exports = app; 
