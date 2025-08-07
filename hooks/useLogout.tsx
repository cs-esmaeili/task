'use client'

import { useRouter } from 'next/navigation'

export const useLogout = () => {

    const router = useRouter();

    const logout = () => {
        localStorage.removeItem('UserData') 
        localStorage.removeItem('PhoneNumber') 
        router.replace('/auth');
    }

    return logout;
}
