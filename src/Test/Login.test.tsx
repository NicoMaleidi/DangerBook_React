
import {describe, it, expect} from 'vitest';
import { render, screen } from '@testing-library/react';
import Login from '../pages/Login';

describe('Login Component', () => {
  it('renders login form', () => {
    render(<Login />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });
});
