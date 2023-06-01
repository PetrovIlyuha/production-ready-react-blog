import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button tests', () => {
    test('Button is rendered', () => {
        render(<Button />);
        expect(screen.getByText('Test Me')).toBeInTheDocument();
    });
    test('Button received proper Theme class via props', () => {
        render(<Button theme={ButtonTheme.CLEAN} />);
        expect(screen.getByText('Test Button')).toHaveClass('clean');
    });
});
