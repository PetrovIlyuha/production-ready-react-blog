import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";

import moduleClasses from './NavBar.module.scss';
import {AppLink} from "shared/ui/AppLink/AppLink";


interface NavbarProps {
    className?: string;
}

export const NavBar = ({className}: NavbarProps) => {
    return (
        <nav className={classNames(moduleClasses.navbar, {}, [className])}>
            <div className={moduleClasses.links}>
                <AppLink to={'/'}>Main</AppLink>
                <AppLink to={'/about'}>About</AppLink>
            </div>
        </nav>
    )
        ;
};
