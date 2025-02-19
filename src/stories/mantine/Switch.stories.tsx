import { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@mantine/core';

const meta = {
  title: 'Mantine/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
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
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Toggle me',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Notifications',
    description: 'Enable email notifications',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled switch',
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Terms and conditions',
    error: 'You must accept the terms',
  },
};

export const ColoredSwitch: Story = {
  args: {
    label: 'Colored switch',
    color: 'blue',
  },
};