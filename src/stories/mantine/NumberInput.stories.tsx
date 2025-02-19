import type { Meta, StoryObj } from '@storybook/react';
import { NumberInput } from '@mantine/core';

const meta = {
  title: 'Mantine/Form/NumberInput',
  component: NumberInput,
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
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    hideControls: { control: 'boolean' },
    allowDecimal: { control: 'boolean' },
    allowNegative: { control: 'boolean' },
  },
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Enter a number',
    placeholder: '0',
  },
};

export const WithMinMax: Story = {
  args: {
    label: 'Select quantity',
    description: 'Choose between 1 and 10',
    placeholder: '1',
    min: 1,
    max: 10,
  },
};

export const WithStep: Story = {
  args: {
    label: 'Select amount',
    description: 'Increment by 0.5',
    defaultValue: 0,
    step: 0.5,
    decimalScale: 1,
    allowDecimal: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Age',
    error: 'Age must be between 18 and 99',
    min: 18,
    max: 99,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled input',
    value: 42,
    disabled: true,
  },
};

export const HideControls: Story = {
  args: {
    label: 'Custom amount',
    placeholder: 'Type a number',
    hideControls: true,
  },
};

export const CurrencyInput: Story = {
  args: {
    label: 'Price',
    description: 'Enter amount in USD',
    defaultValue: 0,
    min: 0,
    step: 0.01,
    decimalScale: 2,
    allowDecimal: true,
    prefix: '$',
  },
};