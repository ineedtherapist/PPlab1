const Expense = require('../models/Expense');

// Додавання витрати
const addExpense = async (req, res) => {
    try {
        const { category, amount, description } = req.body;
        const newExpense = new Expense({ category, amount, description });
        await newExpense.save();
        res.status(201).json(newExpense);
    } catch (error) {
        res.status(500).json({ message: 'Error adding expense' });
    }
};

// Отримання витрат
const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching expenses' });
    }
};

module.exports = { addExpense, getExpenses };
