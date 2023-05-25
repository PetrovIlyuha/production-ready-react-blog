import React, {lazy, Suspense} from 'react';
import {Link} from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';
import { classNames } from './helpers/classNames/classNames';

import "./styles/index.scss";
import {useTheme} from "./theme/useTheme";

const MainPage = lazy(() => import('./pages/Main'))
const AboutPage = lazy(() => import('./pages/About'))

export function App() {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app', {},[theme])}>
            <button onClick={toggleTheme}>Color Theme: {theme}</button>
            <nav>
                <Link to={'/'}>Main Page</Link>
                <Link to={'/about'}>About Page</Link>
            </nav>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'}
                           element={<AboutPage/>}/>
                    <Route path={'/'}
                           element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
}