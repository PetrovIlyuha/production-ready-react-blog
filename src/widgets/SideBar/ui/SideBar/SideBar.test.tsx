import { fireEvent, screen } from '@testing-library/react';
import { SideBar } from 'widgets/SideBar';
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';

describe('Tests for Sidebar', () => {
    test('Sidebar renders a OK', () => {
        renderComponent(<SideBar />);
        const toggleButton = screen.getByTestId('toggle__sidebar_btn');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
