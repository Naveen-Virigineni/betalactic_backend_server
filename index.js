const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Import cors
const contactRoutes = require('./routes/contactRoutes');

dotenv.config();

const app = express(); // 1. INITIALIZE APP FIRST

// 2. NOW APPLY MIDDLEWARE
app.use(cors());
app.use(express.json());

// 3. SET UP ROUTES
app.use('/api', contactRoutes); 

app.use((err, req, res, next) => {
  console.error("SERVER ERROR:", err.stack); // This prints the real error to Render logs
  res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 10000; // Use 10000 for Render
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));