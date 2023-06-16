import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nForTesting from 'shared/config/i18n/i18nForTesting';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { StoreProvider } from 'app/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/StoreProvider/config/StateSchema';

export interface RenderWithRouterOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>
}

export const renderComponent = (component: ReactNode, options: RenderWithRouterOptions = {}) => {
    const { route = '/' } = options;
    return render(
        <StoreProvider>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTesting}>{component}</I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
};
