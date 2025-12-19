const express = require('express');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contactRoutes'); // Import your route
const cors = require('cors');

dotenv.config();
const app = express();

app.use(cors());
// Middleware to read JSON data from the form
app.use(express.json());

// Use the routes
app.use('/api', contactRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));