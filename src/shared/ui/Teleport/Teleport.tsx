import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import '../../../app/styles/index.scss';

interface TeleportProps {
    children: ReactNode;
    element?: HTMLElement
}

export const Teleport: FC<TeleportProps> = ({ children, element = document.body }) => createPortal(children, element);
