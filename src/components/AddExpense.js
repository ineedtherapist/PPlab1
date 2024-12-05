import React from 'react';
import { useState } from 'react';
import axios from '../services/axios'; // axios для запитів

const AddExpense = () => {
    const [description, setDescription] = useState('');
    const [cost, setCost] = useState('');
    const [expanse_name, setExpanseName] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Функція для обробки форми
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!description || !cost || !expanse_name) {
            setError('Будь ласка, заповніть всі поля');
            return;
        }

        // Створення об'єкта витрати
        const expense = { description, cost: parseFloat(cost), expanse_name };

        try {
            // Надсилання POST-запиту на сервер для додавання витрати
            await axios.post('/api/expenses', expense);  // тут не потрібно зберігати response

            // Очищення полів форми після успішного додавання
            setDescription('');
            setCost('');
            setExpanseName('');

            setSuccess('Витрата успішно додана!');
            setError('');
        } catch (error) {
            setError('Щось пішло не так! Спробуйте ще раз.');
            setSuccess('');
        }
    };

    return (
        <div>
            <h2>Add an expense</h2>
            <form onSubmit={handleSubmit}>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
                <div>
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="cost">Amount:</label>
                    <input
                        type="number"
                        id="cost"
                        value={cost}
                        onChange={(e) => setCost(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="expanse_name">Expense category:</label>
                    <input
                        type="text"
                        id="expanse_name"
                        value={expanse_name}
                        onChange={(e) => setExpanseName(e.target.value)}
                    />
                </div>
                <button type="submit">Add costs</button>
            </form>
        </div>
    );
};

export default AddExpense;
