import {FC} from "react";

import {classNames} from "shared/lib/classNames/classNames";
import moduleClasses from './LangToggler.module.scss';
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface LangTogglerProps {
    className?: string;
}

export const LangToggler: FC<LangTogglerProps> = ({className}) => {
    const {t, i18n} = useTranslation()
    const changeLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru').then(() => {});
    }
    return (
           <Button onClick={changeLang} theme={ButtonTheme.CLEAN} className={classNames(moduleClasses.langToggler, {}, [className])}>
               {t("AppLanguage")}
           </Button>
    );
};