import {useTheme} from 'app/providers/ThemeProvider';
import {AppRouter} from "app/providers/router";

import {classNames} from 'shared/lib/classNames/classNames';

import "./styles/index.scss";
import {NavBar} from "widgets/NavBar";
import {ThemeToggler} from "widgets/ThemeToggler";


export function App() {
    const {theme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <ThemeToggler className={""}/>
            <NavBar/>
            <AppRouter/>
        </div>
    );
}