import {FC, useState} from "react";

import {classNames} from "shared/lib/classNames/classNames";
import moduleClasses from './SideBar.module.scss';
import {ThemeToggler} from "widgets/ThemeToggler";
import {LangToggler} from "widgets/LangToggler";

interface SideBarProps {
    className?: string;
}

export const SideBar: FC<SideBarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsedState = () => {
        setCollapsed((prev) => !prev);
    }
    return (
        <div className={classNames(moduleClasses.sideBar, {[moduleClasses.collapsed]: collapsed}, [className])}>
            <button
                onClick={toggleCollapsedState}
                className={classNames(moduleClasses.collapseBtn, {[moduleClasses.menuCollapsedBtn]: collapsed})}>
                &lt;
            </button>
            <div className={classNames(moduleClasses.switchers, {[moduleClasses.collapsedSwitchers]: collapsed})}>
                <ThemeToggler/>
                <LangToggler/>
            </div>
        </div>
    );
};
