'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useLogout } from '@/hooks/useLogout'
import styles from './WelcomeMessage.module.scss'
import Button from './Button';

const WelcomeM = () => {

    const [fullName, setFullName] = useState<string>("");
    const [imageUrl, setImageUrl] = useState<string>("");
    const logout = useLogout();

    useEffect(() => {
        const storedUser = localStorage.getItem('UserData');

        if (storedUser) {
            const user = JSON.parse(storedUser);
            setFullName((user.results[0].name.first + " " + user.results[0].name.last) || "");
            setImageUrl(user.results[0].picture.medium || "");
        }
    }, []);

    return (
        <div className={styles.container}>
            {imageUrl && (
                <Image
                    src={imageUrl}
                    alt={fullName}
                    width={48}
                    height={48}
                    className={styles.avatar}
                />
            )}
            <h2>👋 Welcome, {fullName}</h2>

            <Button onClick={logout}>
                exit
            </Button>
        </div>
    );
};

export default WelcomeM;
