const express = require('express');
const expenseController = require('../controllers/expense.controller');
const { authenticate } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/create', authenticate, expenseController.createExpense);

module.exports = router;
