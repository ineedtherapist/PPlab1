const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense'); // Оновлена модель витрат

// Додавання витрати
router.post('/', async (req, res) => {
    const { description, cost, expanse_name } = req.body;

    if (!description || !cost || !expanse_name) {
        return res.status(400).json({ message: 'Будь ласка, заповніть всі поля.' });
    }

    try {
        // Створення нової витрати на основі отриманих даних
        const newExpense = new Expense({
            description,
            cost: parseFloat(cost), // Перетворюємо суму на число
            expanse_name,
        });

        // Збереження витрати в базі даних
        await newExpense.save();

        // Відправляємо відповідь з новою витратою
        res.status(201).json(newExpense);
    } catch (error) {
        console.error('Error adding expense:', error);
        res.status(500).json({ message: 'Щось пішло не так!' });
    }
});

module.exports = router;
