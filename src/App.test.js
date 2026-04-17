// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AkashCompute title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AkashCompute/i);
    expect(titleElement).toBeInTheDocument();
});
