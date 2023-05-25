import { classNames } from 'shared/lib/classNames/classNames';
import {Link} from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider';

import "./styles/index.scss";
import {AppRouter} from "app/providers/router";

export function App() {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app', {},[theme])}>
            <button onClick={toggleTheme}>Color Theme: {theme}</button>
            <nav>
                <Link to={'/'}>Main Page</Link>
                <Link to={'/about'}>About Page</Link>
            </nav>
            <AppRouter/>
        </div>
    );
}