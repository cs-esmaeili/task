'use client'

import { useEffect, useState } from 'react';
import { useLogout } from '@/hooks/useLogout'
import styles from './WelcomeMessage.module.scss'
import Button from './Button';

const WelcomeM = () => {

    const [fullName, setFullName] = useState<string>("");
    const logout = useLogout();

    useEffect(() => {
        const storedUser = localStorage.getItem('UserData');

        if (storedUser) {
            const user = JSON.parse(storedUser);
            setFullName((user.results[0].name.first + user.results[0].name.last) || "");
        }
    }, []);


    return (
        <div className={styles.container}>
            <h2>👋 Welcome, {fullName}</h2>

            <Button onClick={logout}>
                exit
            </Button>
        </div>
    );
};

export default WelcomeM;
