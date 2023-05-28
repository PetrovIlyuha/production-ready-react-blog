import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';

import { classNames } from 'shared/lib/classNames/classNames';

import './styles/index.scss';

import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';

export function App() {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <NavBar />
            <div className="page-content">
                <SideBar />
                <AppRouter />
            </div>
        </div>
    );
}
