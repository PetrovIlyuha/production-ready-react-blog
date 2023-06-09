import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import moduleClasses from './NavBar.module.scss';

interface NavbarProps {
    className?: string;
}

export function NavBar({ className }: NavbarProps) {
    const { t } = useTranslation();
    return (
        <nav className={classNames(moduleClasses.navbar, {}, [className])} />
    );
}
