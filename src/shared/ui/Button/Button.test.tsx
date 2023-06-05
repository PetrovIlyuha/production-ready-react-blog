import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button tests', () => {
    test('Button is rendered', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('Button received proper Theme class via props', () => {
        render(<Button theme={ButtonTheme.CLEAN}>SuperBtn</Button>);
        expect(screen.getByText('SuperBtn')).toHaveClass('clean');
    });
});
