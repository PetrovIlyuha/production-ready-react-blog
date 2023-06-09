import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import NotFoundPageImg from 'shared/assets/not_found.jpg';
import moduleClasses from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(moduleClasses.notFoundPage, {}, [className])}>
            <div className={moduleClasses.backdrop}>
                <img
                    src={NotFoundPageImg}
                    alt={t('page not found')}
                />
                <h1>
                    {t('This Page does not exist')}
                </h1>
            </div>
        </div>

    );
};
