import { FC, useEffect, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import moduleClasses from './LangToggler.module.scss';

interface LangTogglerProps {
    className?: string;
}

export const LangToggler: FC<LangTogglerProps> = ({ className }) => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState<string>(i18n.language);
    const [animate, setAnimate] = useState<boolean>(false);

    useEffect(() => {
        setAnimate(true);
        const to = setTimeout(() => {
            setLang(i18n.language);
            setAnimate(false);
        }, 400);
        return () => clearTimeout(to);
    }, [i18n.language]);

    const changeLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru').then(() => {
        });
    };
    return (
        <Button
            onClick={changeLang}
            theme={ButtonTheme.CLEAN}
            className={classNames(moduleClasses.langToggler, { [moduleClasses.animate]: animate }, [className])}
        >
            {lang ? lang[0].toUpperCase() + lang.slice(1) : 'En'}
        </Button>
    );
};
