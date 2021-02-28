import styles from '../styles/components/SideBar.module.css'
import { Home, Award } from 'react-feather';

export function SideBar() {
    return (
        <div className={styles.sideBarContainer}>
            <img src="/logo.svg" alt="Home" />
            
            <button type="button">
                <Home />
            </button>
            <button>
                <Award />
            </button>
        </div>
    );
}