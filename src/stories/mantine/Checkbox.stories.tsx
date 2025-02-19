import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, Stack } from '@mantine/core';

const meta = {
  title: 'Mantine/Form/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Accept terms and conditions',
    description: 'You agree to our Terms of Service and Privacy Policy',
  },
};

export const WithError: Story = {
  args: {
    label: 'Accept terms and conditions',
    error: 'This field is required',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
    disabled: true,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate state',
    indeterminate: true,
  },
};

export const CheckboxGroup: Story = {
  render: () => (
    <Stack>
      <Checkbox label="React" value="react" />
      <Checkbox label="Vue" value="vue" />
      <Checkbox label="Angular" value="angular" />
      <Checkbox label="Svelte" value="svelte" />
    </Stack>
  ),
};