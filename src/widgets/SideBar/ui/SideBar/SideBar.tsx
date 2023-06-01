import { FC, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeToggler } from 'widgets/ThemeToggler';
import { LangToggler } from 'widgets/LangToggler';
import moduleClasses from './SideBar.module.scss';

interface SideBarProps {
    className?: string;
}

export const SideBar: FC<SideBarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsedState = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="sidebar"
            className={classNames(moduleClasses.sideBar, { [moduleClasses.collapsed]: collapsed }, [className])}
        >
            <button
                type="button"
                data-testid="toggle-sidebar_btn"
                onClick={toggleCollapsedState}
                className={classNames(moduleClasses.collapseBtn, { [moduleClasses.menuCollapsedBtn]: collapsed })}
            >
                &lt;
            </button>
            <div className={classNames(moduleClasses.switchers, { [moduleClasses.collapsedSwitchers]: collapsed })}>
                <ThemeToggler />
                <LangToggler />
            </div>
        </div>
    );
};
