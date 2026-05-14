require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./database/db');

const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json({ extended: false }));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/problems', require('./routes/problemRoutes'));

app.get('/', (req, res) => {
    res.send('DevArena API is running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
