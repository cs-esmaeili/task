'use client'

import { useState } from 'react'
import { Login } from '@/lib/axios/services/auth'

interface LoginResponseData {
    user: {
        id: string
        name: string
        email: string
    }
    token: string
}

export const useLogin = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)

    const login = async (): Promise<LoginResponseData | null> => {
        setLoading(true)
        setError(null)
        try {
            const response = await Login()
            return response.data as LoginResponseData
        } catch (err) {
            if (err instanceof Error) {
                setError(err)
            } else {
                setError(new Error('Unknown error'))
            }
            return null;
        } finally {
            setLoading(false)
        }
    }

    return { login, loading, error }
}
