const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');

// 1. Initialize environment variables first
dotenv.config();

// 2. Initialize the 'app' BEFORE using it
const app = express();

// 3. Configure Middleware in order
// Enable CORS for all requests
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

// Middleware to parse incoming JSON data
app.use(express.json());

// 4. Set up Routes after middleware
app.use('/api', contactRoutes); 

// 5. Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});