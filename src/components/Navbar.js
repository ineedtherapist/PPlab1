import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h1>Expense Tracker</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add-expense">Add Expense</Link></li>
                <li><Link to="/statistics">Statistics</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
