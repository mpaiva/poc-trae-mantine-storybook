import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@mantine/core';

const meta = {
  title: 'Mantine/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'light', 'outline', 'subtle', 'white', 'gradient', 'default'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: 'color',
    },
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'filled',
    size: 'md',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    children: 'Button',
    size: 'lg',
  },
};

export const Small: Story = {
  args: {
    children: 'Button',
    size: 'sm',
  },
};