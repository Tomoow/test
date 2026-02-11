/**
 * Design Tokens
 * Semantic tokens mapped from base design tokens
 * Never use base tokens directly - always use semantic tokens
 */

export const tokens = {
  color: {
    background: {
      primary: {
        default: '#1F00FF',
        hover: '#1900CC',
        active: '#130099',
        disabled: '#8F80FF',
      },
      neutral: {
        default: '#ffffff',
        hover: '#f5f5f5',
        active: '#e5e5e5',
        disabled: '#cccccc',
      },
    },
    text: {
      onPrimary: {
        default: '#ffffff',
        disabled: '#999999',
      },
      onNeutral: {
        default: '#000000',
        disabled: '#999999',
      },
    },
  },
  spacing: {
    button: {
      horizontal: '24px',
      vertical: '12px',
    },
    xsmall: '4px',
    small: '8px',
    medium: '12px',
    large: '16px',
    xlarge: '24px',
  },
  radius: {
    small: '4px',
    medium: '8px',
    large: '12px',
    button: '8px',
  },
  typography: {
    button: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '1.5',
    },
  },
} as const;

export type Tokens = typeof tokens;
