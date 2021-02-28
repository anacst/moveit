import styles from '../styles/components/Login.module.css';
import { ArrowRight } from 'react-feather';

export function Login() {
    return (
        <div className={styles.loginContainer}>
            <img src='/logo-full-white.svg' alt='Logo' />

            <strong>Bem-vindo</strong>
        
            <p>Faça login com seu Github para começar</p>

            <form>
                <div>
                    <input type="text" placeholder="Digite seu username"></input>
                    <button><ArrowRight /></button>
                </div>                
            </form>
        </div>
    );
}