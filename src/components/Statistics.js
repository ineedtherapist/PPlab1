import React from 'react';
import { useEffect, useState } from 'react';
import axios from '../services/axios'; // Використовуємо axios для запитів

const Statistics = () => {
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const fetchStatistics = async () => {
            try {
                const response = await axios.get('expenses');
                const total = response.data.reduce((acc, expense) => acc + expense.amount, 0);
                setTotalAmount(total);
            } catch (error) {
                console.error('Error fetching statistics:', error);
            }
        };
        fetchStatistics();
    }, []);

    return (
        <div>
            <h2>Statistics</h2>
            <p>Total Amount: {totalAmount}</p>
        </div>
    );
};

export default Statistics;
