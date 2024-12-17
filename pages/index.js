// pages/index.js
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome to the User Authentication System</h1>
            <div className={styles.links}>
                <Link href="/register" className={styles.btn}>
                    Register
                </Link>
                <Link href="/login" className={styles.btn}>
                    Login
                </Link>
            </div>
        </div>
    );
}
