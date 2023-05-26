import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

import {classNames} from "shared/lib/classNames/classNames";

import moduleClasses from './AppLink.module.scss';


export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}


interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {to, className, children, theme = AppLinkTheme.PRIMARY} = props;
    return (
        <Link to={to} {...props}
              className={classNames(moduleClasses.appLink, {}, [className, moduleClasses[theme]])}>
            {children}
        </Link>
    );
};
