require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employeeRoutes');


const app = express();
app.use(bodyParser.json());

// Mount the employeeRoutes middleware
app.use('/employees', employeeRoutes);

const PORT = process.env.PORT || 3002; // Use the provided PORT environment variable or default to 3002

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
