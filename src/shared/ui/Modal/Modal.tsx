import React, {
    FC, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Teleport } from 'shared/ui/Teleport/Teleport';
import { useTheme } from 'app/providers/ThemeProvider';
import moduleClasses from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children: ReactNode,
    isOpen?: boolean;
    onClose?: () => void,
    lazy?: boolean;
}

const ANIMATION_DURATION = 300;

export const Modal: FC<ModalProps> = ({
    className, children, isOpen, onClose, lazy,
}) => {
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const { theme } = useTheme();

    useEffect(() => {
        if (isOpen) setIsMounted(true);
    }, [isOpen]);

    const onModalClose = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DURATION);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onModalClose();
        }
    }, [onModalClose]);

    useEffect(
        () => {
            if (isOpen) {
                window.addEventListener('keydown', onKeyDown);
            }
            return () => {
                clearTimeout(timerRef.current);
                window.removeEventListener('keydown', onKeyDown);
            };
        },
        [isOpen, onKeyDown],
    );

    if (lazy && !isMounted) return null;

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <Teleport>
            <div className={classNames(moduleClasses.modal, {
                [moduleClasses.opened]: isOpen,
                [moduleClasses.closing]: isClosing,
            }, [className, theme])}
            >
                <div
                    className={moduleClasses.overlay}
                    onClick={onModalClose}
                >
                    <div
                        className={moduleClasses.modal_content}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Teleport>
    );
};
