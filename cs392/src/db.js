

const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3001;
const cors = require('cors');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'testdb',
});

// connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('MySQL connection error:', err);
    } else {
        console.log('Connected to MySQL');
    }
});

app.use(cors());

// query data in the tables
app.get('/users', (req, res) => {
    const query = 'SELECT * FROM users limit 2;';
    db.query(query, (err, results) => {
        if (err) {
            console.error('MySQL query error:', err);
            res.status(500).send('Internal Server Error');
        } else {
            //console.error(results);
            res.json(results);

        }
    });
});

app.use(express.json());
// account registration
app.post('/users/register', async (req, res) => {
   const { username, password, email, phone, country } = req.body;


    try {
        const existingUser = await db.query('SELECT * FROM users WHERE username = ?', [username]);

        if (existingUser.length > 0) {
            res.status(400).json({ message: 'Username already exists' });
            return;
        }

        const insertQuery = 'INSERT INTO users (username, password, email, phone, country) VALUES (?, ?, ?, ?, ?)';
        await db.query(insertQuery, [username, password, email, phone, country]);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.post('/users/login', (req, res) => {
     const { username, password } = req.body;
    console.log('Received login request with username:', username, 'and password:', password);

    // find user information
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(query, [username, password], (err, results) => {
        if (err) {
            console.error('MySQL query error:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            if (results.length > 0) {
                // login in successfully, go back to account
                const userData = results[0];
                res.status(200).json(userData);
                console.error('login success');
            } else {
                // username doesn't match password, prompt the user
                console.error('login failed')
                res.status(401).json({ message: 'Invalid username or password' });
            }
        }
    });
});

// lanunch the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

