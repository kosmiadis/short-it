import { screen, render } from '@testing-library/react';
import Navbar from '../Navbar';

test('Logo is rendered', () => {
    render(<Navbar />)

    const logo = screen.getByAltText('Short-It');
    expect(logo).toBeInTheDocument(); // Assertion to verify the logo is rendered

})