'use client';

import styles from './Button.module.scss';
import React, { ButtonHTMLAttributes } from 'react';


interface DivButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    ref?: React.Ref<HTMLButtonElement>;
}

const Button = ({ children, className = '', ref, ...props }: DivButtonProps) => {
    return (
        <button
            ref={ref}
            className={`${styles.button} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;