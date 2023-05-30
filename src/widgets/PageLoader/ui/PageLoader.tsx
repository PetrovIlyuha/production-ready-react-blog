import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader';
import moduleClasses from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
    <div className={classNames(moduleClasses.pageLoader, {}, [className])}>
        <Loader />
    </div>
);
