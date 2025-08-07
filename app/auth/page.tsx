import styles from './auth.module.scss';
import LoginForm from '@/components/LoginForm';

const page = () => {
    return (
        <div className={styles.container}>

            <div className={styles.loginBox}>
                <div className={styles.header}>
                    <h2>Welcome Back</h2>
                    <p>Please sign in to your account</p>
                </div>

                <LoginForm />
            </div>

            <div className={styles.blurCircle1}></div>
            <div className={styles.blurCircle2}></div>
            <div className={styles.blurCircle3}></div>

        </div>
    );
};

export default page;