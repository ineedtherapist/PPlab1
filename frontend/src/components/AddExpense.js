// frontend/src/components/AddExpense.js
import { useState } from 'react';
import axios from '../axios'; // axios для запитів

const AddExpense = () => {
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Функція для обробки форми
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!category || !amount || !description) {
            setError('Будь ласка, заповніть всі поля');
            return;
        }

        // Створення об'єкта витрати
        const expense = { category, amount: parseFloat(amount), description };

        try {
            // Надсилання POST-запиту на сервер для додавання витрати
            const response = await axios.post('/api/expenses', expense);

            // Очищення полів форми після успішного додавання
            setCategory('');
            setAmount('');
            setDescription('');

            setSuccess('Витрата успішно додана!');
            setError('');
        } catch (error) {
            setError('Щось пішло не так! Спробуйте ще раз.');
            setSuccess('');
        }
    };

    return (
        <div>
            <h2>Додати витрату</h2>
            <form onSubmit={handleSubmit}>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
                <div>
                    <label htmlFor="category">Назва витрати:</label>
                    <input
                        type="text"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="amount">Сума:</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description">Опис:</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button type="submit">Додати витрату</button>
            </form>
        </div>
    );
};

export default AddExpense;
