import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@mantine/core';

const meta = {
  title: 'Mantine/Form/Textarea',
  component: Textarea,
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
    autosize: { control: 'boolean' },
    minRows: { control: 'number' },
    maxRows: { control: 'number' },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Your comment',
    placeholder: 'Type your comment here',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Bio',
    description: 'Tell us about yourself',
    placeholder: 'I am a developer...',
  },
};

export const WithError: Story = {
  args: {
    label: 'Your feedback',
    error: 'Feedback is required',
    placeholder: 'Type your feedback',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled textarea',
    placeholder: 'You cannot type here',
    disabled: true,
  },
};

export const Autosize: Story = {
  args: {
    label: 'Autosize textarea',
    placeholder: 'This textarea will grow with content',
    autosize: true,
    minRows: 2,
    maxRows: 4,
  },
};

export const WithValue: Story = {
  args: {
    label: 'Pre-filled textarea',
    value: 'This is some pre-filled content that you can edit.',
    autosize: true,
    minRows: 2,
  },
};