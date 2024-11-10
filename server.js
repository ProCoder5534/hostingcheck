// Import the required modules
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Port defined by Render or default to 3000

// Define a simple route that sends "Hello Server"
app.get('/', (req, res) => {
  res.send('Hello Server');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
