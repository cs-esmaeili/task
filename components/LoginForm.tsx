'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaUser } from "react-icons/fa";
import Input from '@/components/Input';
import { loginSchema } from '@/validations/loginSchema';
import { LoginFormInputs } from '@/types/forms';
import styles from './LoginForm.module.scss';
import Button from './Button';
import { useLogin } from '@/hooks/useLogin';
import Spinner from './Spinner';
import { useRouter } from 'next/navigation';

export default function LoginForm() {

    const { login, loading, error } = useLogin();
    const router = useRouter();

    const { register, handleSubmit, formState: { errors, isSubmitting }, clearErrors } = useForm<LoginFormInputs>({
        resolver: yupResolver(loginSchema),
        mode: 'onSubmit',
        reValidateMode: 'onChange'
    });

    const onSubmit = async (data: LoginFormInputs) => {
        // console.log('Login data:', data);

        const response = await login();

        localStorage.setItem('UserData', JSON.stringify(response));
        const storedUser = localStorage.getItem('UserData');
        if (storedUser)
            console.log(JSON.parse(storedUser));

        router.replace('/dashboard');

    };

    const handleInputChange = (fieldName: keyof LoginFormInputs) => {
        return () => {
            if (errors[fieldName]) {
                clearErrors(fieldName);
            }
        };
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
            <div className={styles.header}>
                <h2>Welcome Back</h2>
                <p>Please sign in to your account</p>
            </div>

            <div className={styles.formFields}>
                <div className={styles.fieldWrapper}>
                    <Input
                        icon={<FaUser />}
                        placeholder="Enter your username"
                        title="Username"
                        divCssClass={errors.username ? styles.errorInput : ''}
                        {...register('username', {
                            onChange: handleInputChange('username')
                        })}
                    />
                    {errors.username && (
                        <p className={styles.errorMessage}>{errors.username.message}</p>
                    )}
                </div>
            </div>
            {loading ?
                <Spinner />
                :
                <Button type="submit"
                    className={styles.submitButton}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Signing in...' : 'Sign In'}
                </Button>
            }

            {error &&
                <div>
                    خطایی رخ داد دوباره تلاش کنید
                </div>
            }

        </form>
    );
}