import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import moduleClasses from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();

    // eslint-disable-next-line no-restricted-globals
    const reload = () => location.reload();
    return (
        <div className={classNames(moduleClasses.pageErrorWrapper, {}, [className])}>
            <p className={moduleClasses.message}>
                {t('Unexpected failure occurred. Try to reload an app.')}
            </p>
            <Button onClick={reload}>
                {t('Refresh')}
            </Button>
        </div>
    );
};
