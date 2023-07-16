import { FC, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import moduleClasses from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();
    const [form, setForm] = useState<{ email: string, password: string }>({ email: '', password: '' });
    const validationErrors = {
        email: 'invalid email format',
        password: 'password should be more strong',
    };
    const [validationEnabledFor, setValidationEnabledFor] = useState({ email: false, password: false });
    const [invalidFields, setInvalidFields] = useState({ email: false, password: false });
    const [formValidity, setFormValidity] = useState<{ email: boolean, password: boolean }>({
        email: false,
        password: false,
    });
    const { email, password } = form;

    useEffect(() => {
        // eslint-disable-next-line no-use-before-define
        const [_, emailIsValid] = validateEmailAndPassword(email, password);
        if (validationEnabledFor.email) {
            setInvalidFields(({ ...invalidFields, email: !emailIsValid }));
        } else {
            setInvalidFields(({ ...invalidFields, email: false }));
        }
        setFormValidity(({ ...formValidity, email: emailIsValid }));
        // eslint-disable-next-line
    }, [email, validationEnabledFor.email]);

    useEffect(() => {
        // eslint-disable-next-line no-use-before-define
        const [passwordIsValid] = validateEmailAndPassword(email, password);
        if (validationEnabledFor.password) {
            setInvalidFields(({ ...invalidFields, password: !passwordIsValid }));
        } else {
            setInvalidFields(({ ...invalidFields, password: false }));
        }
        setFormValidity(({ ...formValidity, password: passwordIsValid }));
        // eslint-disable-next-line
    }, [password, validationEnabledFor.password]);

    const onFormValueChange = (value: string, fieldName: string) => {
        setValidationEnabledFor({ ...validationEnabledFor, [fieldName]: value.length > 0 });
        setForm((form) => ({ ...form, [fieldName]: value }));
    };

    const validateEmailAndPassword = (email: string, password: string) => {
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/;
        const emailRegex = /^[\w\d]+@[\w\d]+\.[\w\d]{2,5}$/;
        return [passRegex.test(password), emailRegex.test(email)];
    };

    const submitForm = () => {
        console.log(form);
    };

    return (
        <div className={classNames(moduleClasses.LoginForm, {}, [className])}>
            <h2>{t('Login to Streams')}</h2>
            <Input
                autoFocus
                onChange={(value) => {
                    onFormValueChange(value, 'email');
                }}
                value={email}
                type="text"
                placeholder={t('Your email')}
                errorMessage={validationErrors.email}
                fieldInvalid={invalidFields.email}
            />
            <Input
                onChange={(value) => {
                    onFormValueChange(value, 'password');
                }}
                value={password}
                type="password"
                placeholder={t('Password')}
                errorMessage={validationErrors.password}
                fieldInvalid={invalidFields.password}
            />

            <Button
                disabled={!Object.values(formValidity).every(Boolean)}
                onClick={submitForm}
                theme={ButtonTheme.BACKGROUND_COMPLIANT}
            >
                {t('Login')}
            </Button>
        </div>
    );
};
