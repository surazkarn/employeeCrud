const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());


const PORT = process.env.PORT || 3002; // Use the provided PORT environment variable or default to 3002

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
