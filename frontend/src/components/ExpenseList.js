// frontend/src/components/ExpenseList.js
import { useEffect, useState } from 'react';
import axios from '../axios'; // Використовуємо axios для запитів

const ExpenseList = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const response = await axios.get('expenses');
                setExpenses(response.data);
            } catch (error) {
                console.error('Error fetching expenses:', error);
            }
        };
        fetchExpenses();
    }, []);

    return (
        <div>
            <h2>Expenses List</h2>
            <ul>
                {expenses.map((expense) => (
                    <li key={expense._id}>
                        <h3>{expense.category}</h3>
                        <p>Amount: {expense.amount}</p>
                        <p>Description: {expense.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;

