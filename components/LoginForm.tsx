'use client';

import { useForm } from 'react-hook-form';
import styles from './LoginForm.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type LoginFormInputs = {
    username: string;
};

// Yup schema
const schema = yup.object({
    username: yup.string().required('Username is required'),
});

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInputs>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: LoginFormInputs) => {
        console.log('Login data:', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
            <div className={styles.inputGroup}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    {...register('username')}
                />
                {errors.username && (
                    <p className={styles.error}>{errors.username.message}</p>
                )}
            </div>

            <button type="submit" className={styles.submitButton}>
                Login
            </button>
        </form>
    );
}
