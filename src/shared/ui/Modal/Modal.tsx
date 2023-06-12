import React, {
    FC, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Teleport } from 'shared/ui/Teleport/Teleport';
import moduleClasses from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children: ReactNode,
    isOpen?: boolean;
    onClose?: () => void
}

const ANIMATION_DURATION = 300;

export const Modal: FC<ModalProps> = ({
    className, children, isOpen, onClose,
}) => {
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

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

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <Teleport>
            <div className={classNames(moduleClasses.modal, {
                [moduleClasses.opened]: isOpen,
                [moduleClasses.closing]: isClosing,
            }, [className])}
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
