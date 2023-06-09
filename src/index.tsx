import { render } from 'react-dom';
import { App } from 'app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';

import 'app/styles/index.scss';
import 'shared/config/i18n/i18n';
import { Suspense } from 'react';
import { PageLoader } from 'widgets/PageLoader';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/StoreProvider';

render(
    <StoreProvider>
        <BrowserRouter>
            <ThemeProvider>
                <Suspense fallback={<PageLoader />}>
                    <ErrorBoundary>
                        <App />
                    </ErrorBoundary>
                </Suspense>
            </ThemeProvider>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root'),
);
