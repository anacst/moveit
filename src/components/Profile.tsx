import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengeContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://scontent.fcpq10-1.fna.fbcdn.net/v/t31.0-8/22051317_460506524349542_6679608135698334970_o.jpg?_nc_cat=104&ccb=3&_nc_sid=09cbfe&_nc_ohc=NYr6RiDxiREAX846VuZ&_nc_ht=scontent.fcpq10-1.fna&oh=c9d02916d5fa1b0ad9399504ae99bcea&oe=6059BA4E" alt="Ana Costa" />
            <div>
                <strong>Ana Costa</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level { level }</p>
            </div>
        </div>
    );
}