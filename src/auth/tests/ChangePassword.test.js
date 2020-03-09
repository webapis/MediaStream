import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, wait } from '@testing-library/react';
import ChangePassword from '../ChangePassword';
import AuthPropvider from '../AuthProvider';
describe('ChangePassword', () => {
  beforeEach(() => {
    render(
      <AuthPropvider>
        {({ handleChange, state, handleChangePass }) => {
          return (
            <ChangePassword
              state={state}
              handleChange={handleChange}
              handleChangePass={handleChangePass}
            />
          );
        }}
      </AuthPropvider>
    );
  });
  it('ui controls are visible', () => {
    expect(screen.getByTestId(/password/i)).toBeVisible();
    expect(screen.getByTestId(/confirm/i)).toBeVisible();
    expect(screen.getByTestId(/change/i)).toBeVisible();
  });
  it('enter password', () => {
    fireEvent.change(screen.getByTestId(/password/i), {
      target: { value: '123' }
    });
    expect(screen.getByTestId(/password/i).value).toEqual('123');
  });
  it('enter confirm', () => {
    fireEvent.change(screen.getByTestId(/confirm/i), {
      target: { value: '123' }
    });
    expect(screen.getByTestId(/confirm/i).value).toEqual('123');
  });
  it('click change btn', () => {
    wait(() => {
      fireEvent.click(screen.getByTestId(/change/i));
    });
  });
});
