const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth.routes');
// const expenseRoutes = require('../routes/expense.routes');

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
// app.use('/api/expenses', expenseRoutes);

module.exports = app;


