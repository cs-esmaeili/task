import React, { forwardRef } from 'react';
import styles from './Input.module.scss';
import { InputProps } from '@/types/components';


const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(({
    icon,
    placeholder,
    divCssClass,
    inputCssClass,
    titleCssClass,
    title,
    multiline = false,
    disabled = false,
    type = "text",
    ...props
}, ref) => {

    const containerClasses = [styles.container, disabled && styles.disabled, divCssClass].filter(Boolean).join(' ');
    const inputClasses = [styles.input, icon && styles.hasIcon, inputCssClass].filter(Boolean).join(' ');
    const titleClasses = [styles.title, titleCssClass].filter(Boolean).join(' ');

    return (
        <div className={containerClasses}>
            {icon && <span className={styles.icon}>{icon}</span>}
            {title && <span className={titleClasses}>{title}</span>}
            {multiline ? (
                <textarea
                    ref={ref as React.Ref<HTMLTextAreaElement>}
                    placeholder={placeholder}
                    disabled={disabled}
                    className={inputClasses}
                    {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
                />
            ) : (
                <input
                    ref={ref as React.Ref<HTMLInputElement>}
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    className={inputClasses}
                    {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
                />
            )}
        </div>
    );
});

Input.displayName = 'Input';

export default Input;