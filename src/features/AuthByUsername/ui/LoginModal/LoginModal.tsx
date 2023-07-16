import { FC } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => (
    <Modal
        lazy
        isOpen={isOpen}
        onClose={onClose}
    >
        <LoginForm />
    </Modal>
);
