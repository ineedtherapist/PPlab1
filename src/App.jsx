import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';
import Statistics from './components/Statistics';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/add-expense">Add Expense</a></li>
                        <li><a href="/statistics">Statistics</a></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<ExpenseList />} />
                    <Route path="/add-expense" element={<AddExpense />} />
                    <Route path="/statistics" element={<Statistics />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
