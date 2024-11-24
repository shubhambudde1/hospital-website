const express = require('express');
const cors = require('cors');
const db = require('./connectdb'); // Import the database connection

const app = express();

// Enable CORS so React frontend can access the API
app.use(cors());

// Middleware to parse JSON bodies in requests
app.use(express.json()); // Add this to parse incoming JSON data

// Route to add health records to the database
app.post('/api/add-health-record', (req, res) => {
    const { name, temperature, temperature_unit, systolic, diastolic, heart_rate, date } = req.body;
  
    if (!name || !temperature || !temperature_unit || !systolic || !diastolic || !heart_rate || !date) {
      return res.status(400).json({ error: 'Please provide all required fields' });
    }
  
    const sql = 'INSERT INTO health_records (name, temperature, temperature_unit, systolic, diastolic, heart_rate, date) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values = [name, temperature, temperature_unit, systolic, diastolic, heart_rate, date];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error inserting record:', err.message);
        return res.status(500).json({ error: 'Database error' });
      }
  
      res.status(200).json({ message: 'Record added successfully' });
    });
  });

// Route to get health records as JSON
app.get('/api/health-records', (req, res) => {
  const sql = 'SELECT * FROM health_records';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching records:', err.message);
      res.status(500).json({ error: 'Server error' });
      return;
    }

    // Send the results as a JSON response
    res.json(results);
  });
});

// Start the server
const port = 3003;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
  