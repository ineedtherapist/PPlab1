const mongoose = require('mongoose');

// Оновлена схема витрат
const expenseSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true, // Опис витрати обов'язковий
    },
    cost: {
        type: Number,
        required: true, // Сума витрати обов'язкова
    },
    expanse_name: {
        type: String,
        required: true, // Назва витрати обов'язкова
    }
}, {
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
