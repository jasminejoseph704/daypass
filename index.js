const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Import routes
const authRoutes = require('./routes/auth');  // Authentication routes
const gymRoutes = require('./routes/gym');    // Gym-related routes (including upload)

// Middleware
app.use(express.json());  // For parsing JSON requests

// Use routes
app.use('/api/auth', authRoutes);  // Authentication routes
app.use('/api/gym', gymRoutes);   // Gym-related routes

app.get('/', (req, res) => {
  res.send('DayPass API is running');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
