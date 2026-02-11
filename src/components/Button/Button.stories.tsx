import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Button variant style',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    children: {
      control: 'text',
      description: 'Button content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * Primary button variant - default state
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

/**
 * Secondary button variant
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};

/**
 * Disabled button state
 */
export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Button',
  },
};

/**
 * Small size button
 */
export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Button',
  },
};

/**
 * Medium size button (default)
 */
export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Button',
  },
};

/**
 * Large size button
 */
export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Button',
  },
};

/**
 * Interactive example with play function
 */
export const Interactive: Story = {
  args: {
    variant: 'primary',
    children: 'Click me',
  },
  play: async ({ canvasElement }) => {
    // This would typically use @storybook/testing-library
    // For now, it's a placeholder for interactive testing
  },
};
