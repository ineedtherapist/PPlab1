// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const expensesRouter = require('./routes/expenseRoutes'); // Підключаємо маршрут витрат
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json()); // Для обробки JSON запитів

app.use(cors());

// Підключення до MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Error connecting to MongoDB:', err));

// Маршрут для витрат
app.use('/api/expenses', expensesRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
