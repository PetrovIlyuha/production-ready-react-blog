import {
    ChangeEvent, InputHTMLAttributes, useEffect, useRef, useState,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import HideIcon from '../../assets/icons/HideIcon.svg';
import ViewIcon from '../../assets/icons/ViewIcon.svg';
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
    const { theme } = useTheme();
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    const [placeholderInPlace, setPlaceholderInPlace] = useState(true);
    const [currentInputType, setCurrentInputType] = useState<string>(type);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autoFocus) {
            inputRef.current?.focus();
            setPlaceholderInPlace(false);
        }
    }, [autoFocus]);

    const toggleInputHidden = () => setCurrentInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));

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
                type={currentInputType}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            />
            {/* eslint-disable-next-line no-nested-ternary */}
            {type === 'password' ? currentInputType === 'password'
                ? (
                    <ViewIcon
                        className={classNames(moduleClasses.visibilityIcon, { [moduleClasses.darkIcon]: theme === Theme.LIGHT })}
                        onClick={toggleInputHidden}
                    />
                )
                : (
                    <HideIcon
                        className={classNames(moduleClasses.visibilityIcon, { [moduleClasses.darkIcon]: theme === Theme.LIGHT })}
                        onClick={toggleInputHidden}
                    />
                ) : null}
            {fieldInvalid && <p className={moduleClasses.ErrorMessage}>{errorMessage}</p>}
        </div>
    );
};
