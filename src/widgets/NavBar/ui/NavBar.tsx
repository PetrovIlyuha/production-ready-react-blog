import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";

import moduleClasses from './NavBar.module.scss';
import {AppLink} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";


interface NavbarProps {
    className?: string;
}

export const NavBar = ({className}: NavbarProps) => {
    const {t} = useTranslation();
    return (
        <nav className={classNames(moduleClasses.navbar, {}, [className])}>
            <div className={moduleClasses.links}>
                <AppLink to={'/'}>{t("MainNavMenuItem")}</AppLink>
                <AppLink to={'/about'}>{t('AboutNavMenuItem')}</AppLink>
            </div>
        </nav>
    )
        ;
};
