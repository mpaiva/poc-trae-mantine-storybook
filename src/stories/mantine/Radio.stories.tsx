import type { Meta, StoryObj } from '@storybook/react';
import { Radio, Stack, Group } from '@mantine/core';

const meta = {
  title: 'Mantine/Form/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Select an option',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Select your preferred language',
    description: 'This will be your primary development language',
  },
};

export const WithError: Story = {
  args: {
    label: 'Select an option',
    error: 'Please select an option',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    disabled: true,
  },
};

export const RadioGroup: Story = {
  render: () => (
    <Radio.Group
      name="favoriteFramework"
      label="Select your favorite framework"
      description="This is used for analytics purposes"
      withAsterisk
    >
      <Stack mt="md">
        <Radio value="react" label="React" />
        <Radio value="vue" label="Vue" />
        <Radio value="angular" label="Angular" />
        <Radio value="svelte" label="Svelte" />
      </Stack>
    </Radio.Group>
  ),
};

export const HorizontalGroup: Story = {
  render: () => (
    <Radio.Group
      name="favoriteColor"
      label="Select your favorite color"
      withAsterisk
    >
      <Group mt="md">
        <Radio value="red" label="Red" />
        <Radio value="green" label="Green" />
        <Radio value="blue" label="Blue" />
      </Group>
    </Radio.Group>
  ),
};