import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { Theme, useTheme } from 'app/providers/ThemeProvider';

import LightThemeIcon from 'shared/assets/icons/LightThemeIcon.svg';
import DarkThemeIcon from 'shared/assets/icons/DarkThemeIcon.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import moduleClasses from './ThemeToggler.module.scss';

interface ThemeTogglerProps {
    className?: string;
}

export const ThemeToggler: FC<ThemeTogglerProps> = ({ className }) => {
    const { toggleTheme, theme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAN}
            onClick={toggleTheme}
            className={classNames(moduleClasses.toggler, {}, [className])}
        >
            <div className={moduleClasses.iconWrapper}>
                <div className={classNames(moduleClasses.icons, {
                    [moduleClasses.lightTheme]: theme === Theme.LIGHT,
                    [moduleClasses.darkTheme]: theme === Theme.DARK,
                })}
                >
                    <div>
                        <LightThemeIcon />
                    </div>
                    <div>
                        <DarkThemeIcon />
                    </div>
                </div>
            </div>
        </Button>
    );
};
