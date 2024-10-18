const express = require('express');
const cors = require('cors');
const app = express();


// this for serve react from express
const path = require('path');
app.use(express.static(path.join(__dirname, '..client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});




// Middleware
app.use(cors());
app.use(express.json());

// Sample API endpoint
app.get('/', (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
