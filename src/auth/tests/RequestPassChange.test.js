import React from 'react';
import '@testing-library/jest-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import RequestPasswordChange from '../RequestPassChange';
import AuthProvider from '../AuthProvider';
describe('RequestPassChange', () => {
  beforeEach(() => {
    render(
      <AuthProvider>
        {({ state, handleChange, handleRequestPassChange }) => {
          return (
            <RequestPasswordChange
              state={state}
              handleChange={handleChange}
              handleRequestPassChange={handleRequestPassChange}
            />
          );
        }}
      </AuthProvider>
    );
  });
  it('ui controls visible', () => {
 
    expect(screen.getByTestId(/email/i)).toBeVisible();
    expect(screen.getByTestId(/request/i)).toBeVisible();
  });

  it('enter email', () => {
    fireEvent.change(screen.getByTestId(/email/i), {
      target: { value: 'test@gmail.com' }
    });
    expect(screen.getByTestId(/email/i).value).toEqual('test@gmail.com');
  })
  
});
