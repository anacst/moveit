import Head from 'next/head';
import styles from '../styles/components/LoginPage.module.css';
import { Login } from '../components/Login';

export default function LoginPage() {
    return (
        <div className={styles.background}>
            <Head>
                <title>Login | move.it</title>
            </Head>

            <div className={styles.container}>
                <section>
                    <div />
                    <div>
                        <Login />
                    </div>
                </section>
            </div>
        </div>
    )
}