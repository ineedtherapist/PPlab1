// backend/routes/expenses.js
const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense'); // Модель витрат

// Додавання витрати
router.post('/', async (req, res) => {
    const { category, amount, description } = req.body;

    if (!category || !amount || !description) {
        return res.status(400).json({ message: 'Будь ласка, заповніть всі поля.' });
    }

    try {
        const newExpense = new Expense({
            category,
            amount,
            description
        });

        await newExpense.save(); // Зберігаємо нову витрату в базу даних
        res.status(201).json(newExpense); // Відправляємо відповідь з новою витратою
    } catch (error) {
        console.error('Error adding expense:', error);
        res.status(500).json({ message: 'Щось пішло не так!' });
    }
});

module.exports = router;
