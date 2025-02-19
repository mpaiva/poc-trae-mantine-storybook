import type { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from '@mantine/core';

const meta = {
  title: 'Mantine/Form/PasswordInput',
  component: PasswordInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    error: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    visible: { control: 'boolean' },
    visibilityToggleButtonProps: { control: 'object' },
  },
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Create password',
    description: 'Password must be at least 8 characters long',
    placeholder: 'Your secure password',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    error: 'Password is too weak',
    placeholder: 'Enter a strong password',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Password',
    placeholder: 'Cannot be modified',
    disabled: true,
  },
};

export const WithVisibilityToggle: Story = {
  args: {
    label: 'Password',
    placeholder: 'Click the eye icon to toggle visibility',
    visibilityToggleButtonProps: { 'aria-label': 'Toggle password visibility' },
  },
};

export const WithValue: Story = {
  args: {
    label: 'Password',
    value: 'SecurePassword123',
    description: 'You can change your password',
  },
};