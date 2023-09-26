const Expense = require('../models/expense.model');

async function createExpense(req, res) {
  try {
    const { description, amount, date } = req.body;
    const userId = req.user.id;
    const expense = new Expense({ description, amount, date, user: userId });
    await expense.save();
    res.status(201).json({ message: 'Expense created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { createExpense };
