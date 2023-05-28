import { classNames } from 'shared/lib/classNames/classNames';

import { ButtonHTMLAttributes, FC } from 'react';
import moduleClasses from './Button.module.scss';

export enum ButtonTheme {
    CLEAN = 'clean'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, theme, children, ...otherProps
    } = props;
    return (
        <button
            type="button"
            className={classNames(
                moduleClasses.button,
                {},
                [className, moduleClasses[theme]],
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
};
