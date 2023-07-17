import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Teleport } from 'shared/ui/Teleport/Teleport';
import { LoginModal } from 'features/AuthByUsername';
import moduleClasses from './NavBar.module.scss';

interface NavbarProps {
    className?: string;
}

export function NavBar({ className }: NavbarProps) {
    const { t } = useTranslation();
    const [authModalOpened, setAuthModalOpened] = useState(true);

    const toggleModal = () => {
        setAuthModalOpened((prevState) => !prevState);
    };
    return (
        <nav className={classNames(moduleClasses.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.BACKGROUND_COMPLIANT}
                className={moduleClasses.links}
                onClick={toggleModal}
            >
                {t('Log in')}
            </Button>
            <Teleport>
                <LoginModal
                    isOpen={authModalOpened}
                    onClose={toggleModal}
                />
            </Teleport>
        </nav>
    );
}
