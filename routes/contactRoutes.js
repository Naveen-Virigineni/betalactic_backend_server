const express = require('express');
const router = express.Router();
const { sendContactEmail } = require('../controllers/contactController'); // Note the path change

router.post('/contact', sendContactEmail);

module.exports = router;