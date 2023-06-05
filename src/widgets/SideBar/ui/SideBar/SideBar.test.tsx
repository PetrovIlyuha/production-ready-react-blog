import { screen } from '@testing-library/react';
import { SideBar } from 'widgets/SideBar';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslations/renderWithTranslation';
import { fireEvent } from '@storybook/testing-library';

describe('Tests for Sidebar', () => {
    test('Sidebar renders a OK', () => {
        renderWithTranslation(<SideBar />);
        const toggleButton = screen.getByTestId('toggle__sidebar_btn');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
