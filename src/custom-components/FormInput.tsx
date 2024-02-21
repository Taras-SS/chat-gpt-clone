
import React, { ForwardedRef, InputHTMLAttributes, forwardRef} from 'react'

import classes from './FormInput.module.css';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    errorMessage?: string,
    optional?: boolean
    explanation?: string,
    children?: JSX.Element,
}

export const emailPattern = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
export const passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%;&*()]).{8,}/;


export const FormInput = forwardRef((props: FormInputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    const { label, explanation, optional, errorMessage, children, ...rest } = props;    
    
    const inputClasses = [
        'mt-1 p-2 w-full border bg-white text-black rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300',
        errorMessage ? classes['input-invalid'] : '',
    ].join(' ');

    const inputWrapperClasses = [
        'relative',
        errorMessage ? classes['input-wrapper-invalid'] : '',
    ].join(' ');

    const errorClass = `${classes['error-msg']} ${label ? classes['with-lable'] : classes['without-lable']}`;
    
    return (
        <div className={inputWrapperClasses}>
            <input
                className={inputClasses}
                ref={ref}
                {...rest}
            />
            {children}
            {!!errorMessage && (
                <div className={errorClass} data-cy='error-msg'>
                    {errorMessage}
                </div>
            )}
        </div>
    );
});
