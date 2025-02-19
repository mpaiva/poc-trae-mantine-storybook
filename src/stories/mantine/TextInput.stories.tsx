import { Meta, StoryObj } from '@storybook/react';
import { TextInput } from '@mantine/core';

const meta = {
  title: 'Mantine/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled', 'unstyled'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
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
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text here',
    label: 'Text Input',
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'Enter text here',
    label: 'Text Input with Error',
    error: 'This field is required',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    label: 'Disabled Text Input',
    disabled: true,
  },
};

export const WithDescription: Story = {
  args: {
    placeholder: 'Enter text here',
    label: 'Text Input with Description',
    description: 'This is a helpful description text',
  },
};