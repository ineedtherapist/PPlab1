import React, { useEffect, useState } from 'react';
import axios from '../services/axios'; // Використовуємо axios для запитів

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
            <h2>List of expenses</h2>
            <ul>
                {expenses.map((expense) => (
                    <li key={expense._id}>
                        <h3>Name of the expense: {expense["expanse name"]}</h3>
                        <p>Description: {expense.description}</p>
                        <p>Сosts: {expense.cost} грн</p>
                        <p>ID: {expense._id}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;
