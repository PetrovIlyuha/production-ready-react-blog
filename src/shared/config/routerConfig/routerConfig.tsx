import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not-found'
}

export const RouterPaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]:
        '/',
    [AppRoutes.ABOUT]:
        '/about',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPaths.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RouterPaths.about,
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RouterPaths['not-found'],
        element: <NotFoundPage />,
    },
};
