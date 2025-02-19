import { Meta, StoryObj } from '@storybook/react';
import { Select } from '@mantine/core';

const meta = {
  title: 'Mantine/Select',
  component: Select,
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
    searchable: {
      control: 'boolean',
    },
    clearable: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultData = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
];

export const Default: Story = {
  args: {
    placeholder: 'Select framework',
    label: 'Framework',
    data: defaultData,
  },
};

export const Searchable: Story = {
  args: {
    placeholder: 'Search frameworks',
    label: 'Searchable Select',
    data: defaultData,
    searchable: true,
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'Select framework',
    label: 'Framework',
    data: defaultData,
    error: 'Please select a framework',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Select framework',
    label: 'Framework',
    data: defaultData,
    disabled: true,
  },
};