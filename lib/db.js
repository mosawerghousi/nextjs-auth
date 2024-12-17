// lib/db.js
import mysql from 'mysql2/promise';

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',            // Replace with your MySQL username
    password: 'root',            // Replace with your MySQL password
    database: 'mydb'
});

export default connection;
