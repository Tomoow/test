import React from 'react';
import { tokens } from '../../tokens';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant style
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary';
  /**
   * Button size
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Button content
   */
  children: React.ReactNode;
}

/**
 * Button component following design system conventions
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      disabled = false,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseClass = 'button';
    const variantClass = `button--${variant}`;
    const sizeClass = `button--${size}`;
    const disabledClass = disabled ? 'button--disabled' : '';

    const classes = [baseClass, variantClass, sizeClass, disabledClass, className]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
