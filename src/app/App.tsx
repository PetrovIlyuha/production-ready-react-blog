import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';

import { classNames } from 'shared/lib/classNames/classNames';

import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { useState } from 'react';

export function App() {
    const { theme } = useTheme();
    const [isModalOpened, setIsModalOpened] = useState(false);

    const onModalClose = () => {
        setIsModalOpened(false);
    };
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
