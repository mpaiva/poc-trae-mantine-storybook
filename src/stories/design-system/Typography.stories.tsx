import { Title } from '@mantine/core';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Design System/Typography',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Headings: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Title order={1} style={{ fontSize: '2.125rem', fontFamily: '{fontFamilies.heading}', fontWeight: '{fontWeights.roboto-0}' }}>Heading 1 - 2.125rem</Title>
      <Title order={2} style={{ fontSize: '1.625rem', fontFamily: '{fontFamilies.heading}', fontWeight: '{fontWeights.roboto-0}' }}>Heading 2 - 1.625rem</Title>
      <Title order={3} style={{ fontSize: '1.375rem', fontFamily: '{fontFamilies.heading}', fontWeight: '{fontWeights.roboto-0}' }}>Heading 3 - 1.375rem</Title>
      <Title order={4} style={{ fontSize: '1.125rem', fontFamily: '{fontFamilies.heading}', fontWeight: '{fontWeights.roboto-0}' }}>Heading 4 - 1.125rem</Title>
      <Title order={5} style={{ fontSize: '1rem', fontFamily: '{fontFamilies.heading}', fontWeight: '{fontWeights.roboto-0}' }}>Heading 5 - 1rem</Title>
      <Title order={6} style={{ fontSize: '0.875rem', fontFamily: '{fontFamilies.heading}', fontWeight: '{fontWeights.roboto-0}' }}>Heading 6 - 0.875rem</Title>
    </div>
  ),
};