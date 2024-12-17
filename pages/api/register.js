import bcrypt from 'bcryptjs';
import db from '../../lib/db';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password are required' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        try {
            const [result] = await db.query(
                'INSERT INTO users (username, password) VALUES (?, ?)',
                [username, hashedPassword]
            );
            res.status(201).json({ message: 'User registered successfully', redirectUrl: '/login' });
        } catch (error) {
            res.status(500).json({ error: 'Error registering user' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}