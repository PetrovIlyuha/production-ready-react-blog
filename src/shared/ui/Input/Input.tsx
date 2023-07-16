import {
    ChangeEvent, InputHTMLAttributes, useEffect, useRef, useState,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import moduleClasses from './Input.module.scss';

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HtmlInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    type?: string;
    placeholder?: string;
    errorMessage?: string
    fieldInvalid?: boolean,
    autoFocus?: boolean;
}

export const Input = ({
    className,
    value,
    onChange,
    type = 'text',
    placeholder = '',
    errorMessage = '',
    fieldInvalid = true,
    autoFocus,
    ...otherProps
}: InputProps) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    const [placeholderInPlace, setPlaceholderInPlace] = useState(true);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autoFocus) {
            inputRef.current?.focus();
            setPlaceholderInPlace(false);
        }
    }, [autoFocus]);

    const adjustPlaceholderPosition = (flag: boolean) => {
        if (value.length > 0) return;
        setPlaceholderInPlace(flag);
    };
    return (
        <div className={classNames(moduleClasses.Input, {}, [className])}>
            <p
                onClick={() => setPlaceholderInPlace(false)}
                className={classNames(moduleClasses.placeholder, { [moduleClasses.placeholderLifted]: !placeholderInPlace })}
            >
                {placeholder}
            </p>
            <input
                ref={inputRef}
                onClick={() => adjustPlaceholderPosition(false)}
                onBlur={() => adjustPlaceholderPosition(true)}
                onFocus={() => adjustPlaceholderPosition(false)}
                type={type}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            />
            {fieldInvalid && <p className={moduleClasses.ErrorMessage}>{errorMessage}</p>}
        </div>
    );
};
