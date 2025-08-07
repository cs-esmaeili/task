'use client';

import { useEffect, useState } from 'react';
import { useLogout } from '@/hooks/useLogout'
import Spinner from '@/components/Spinner';
import style from './layout.module.scss';

type Props = {
    children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {

    const [loading, setLoading] = useState(true);
    const logout = useLogout();


    useEffect(() => { // we can use useLayoutEffect to stop fliker we there is some downsides 
        const checkAuth = async () => {
            const storedUser = localStorage.getItem('UserData');
            if (!storedUser) {
                logout();
            } else {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);


    if (loading) {
        return (
            <main className={style.main}>
                <h2>check Auth</h2>
                <Spinner />
            </main>
        );
    }


    return (
        <main className="main">
            {children}
        </main>
    )
}
