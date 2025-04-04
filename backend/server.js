const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
app.use(express.json()); // Parse JSON requests from frontend
app.use(cors()); // Allow requests from React frontend (http://localhost:5173)

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',           // Replace with your MySQL username
  password: 'Raki@3031', // Replace with your MySQL password
  database: 'eventodb'
});

db.connect(err => {
  if (err) {
    console.error('MySQL Connection Failed:', err);
    return;
  }
  console.log('MySQL Connected');
});

// Signup Endpoint
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Check if username or email already exists
  const checkQuery = 'SELECT * FROM users WHERE username = ? OR email = ?';
  db.query(checkQuery, [username, email], async (err, results) => {
    if (err) {
      console.error('Database Error:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: 'Username or email already exists. Please login.' });
    }

    // Hash password 
    // Storing plain-text passwords (e.g., "password123") in the database is insecure—if someone hacks your database, they’d have all user passwords.
    // Hashing transforms the password into a one-way encrypted string. Even you (the developer) can’t reverse it to see the original password.
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const insertQuery = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
      db.query(insertQuery, [username, email, hashedPassword], (err, result) => {
        if (err) {
          console.error('Insert Error:', err);
          return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ message: 'Signup successful' });
      });
    } catch (hashErr) {
      console.error('Hashing Error:', hashErr);
      res.status(500).json({ error: 'Server error' });
    }
  });
});

// Login Endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM users WHERE username = ?';
  db.query(query, [username], async (err, results) => {
    if (err) {
      console.error('Database Error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (results.length === 0) {
      return res.status(400).json({ message: 'User not found' });
    }

    const user = results[0];
    try {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid password' });
      }
      res.status(200).json({ message: 'Login successful', user: { id: user.id, username: user.username } });
    } catch (compareErr) {
      console.error('Comparison Error:', compareErr);
      res.status(500).json({ error: 'Server error' });
    }
  });
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));