// pages/register.js
import { useState } from 'react';
import styles from '../styles/Auth.module.css';
import { useRouter } from 'next/router';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const result = await res.json();
        setMessage(result.message || result.error);

        // Clear input fields if registration is successful
        if (res.ok) {
            setUsername('');  // Clear username
            setPassword('');  // Clear password
            router.push('/login');  // Redirect to the dashboard or any other page

        }
    };

    return (
        <div className={styles['auth-container']}>
            <form onSubmit={handleSubmit} className={styles['auth-form']}>
                <h1>Register</h1>
                <label>Username</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
                <label>Password</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Register</button>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
}
