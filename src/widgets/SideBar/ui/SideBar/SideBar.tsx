import React, { FC, useEffect, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeToggler } from 'widgets/ThemeToggler';
import { LangToggler } from 'widgets/LangToggler';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

import { RouterPaths } from 'shared/config/routerConfig/routerConfig';
import useMediaQuery from 'shared/lib/hooks/useMediaQuery';
import HomeIcon from '../../../../shared/assets/icons/Home_light.svg';
import AboutIcon from '../../../../shared/assets/icons/Chat_search.svg';

import moduleClasses from './SideBar.module.scss';

interface SideBarProps {
    className?: string;
}

export const SideBar: FC<SideBarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();
    const isSmallScreen = useMediaQuery('(max-width: 768px)');

    useEffect(() => {
        setCollapsed(isSmallScreen);
    }, [isSmallScreen]);

    const toggleCollapsedState = () => {
        if (!isSmallScreen) setCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="sidebar"
            className={classNames(moduleClasses.sideBar, { [moduleClasses.collapsed]: collapsed }, [className])}
        >
            <div className={moduleClasses.sidebarItems}>
                <AppLink
                    to={RouterPaths.main}
                    className={moduleClasses.sidebarItem}
                >
                    <HomeIcon className={moduleClasses.sidebarItemIcon} />
                    <span>
                        {t('MainNavMenuItem')}
                    </span>
                </AppLink>
                <AppLink
                    to={RouterPaths.about}
                    className={moduleClasses.sidebarItem}
                >
                    <AboutIcon className={moduleClasses.sidebarItemIcon} />
                    <span>
                        {t('AboutNavMenuItem')}
                    </span>
                </AppLink>
            </div>
            {!isSmallScreen && (
                <button
                    type="button"
                    data-testid="toggle__sidebar_btn"
                    onClick={toggleCollapsedState}
                    className={classNames(moduleClasses.collapseBtn, { [moduleClasses.sidebarCollapsedBtn]: collapsed })}
                >
                    &lt;
                </button>
            )}
            <div className={classNames(moduleClasses.switchers, { [moduleClasses.collapsedSwitchers]: collapsed })}>
                <ThemeToggler />
                <LangToggler />
            </div>
        </div>
    );
};
