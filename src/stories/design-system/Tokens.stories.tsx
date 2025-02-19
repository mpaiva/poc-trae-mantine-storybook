import { Meta, StoryObj } from '@storybook/react';
import { Box, Text, Stack, Group, Paper } from '@mantine/core';
import tokens from '../../tokens/tokens.json';
import type { MantineSize } from '@mantine/core';

const meta = {
  title: 'Design System/Tokens',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ColorSwatch = ({ color, name }: { color: string; name: string }) => (
  <Paper shadow="sm" p="md">
    <Stack gap="xs">
      <Box w={60} h={60} style={{ backgroundColor: color, borderRadius: '4px' }} />
      <Text size="sm">{name}</Text>
      <Text size="xs" c="dimmed">{color}</Text>
    </Stack>
  </Paper>
);

const SpacingSwatch = ({ value, name }: { value: string; name: string }) => (
  <Paper shadow="sm" p="md">
    <Stack gap="xs">
      <Box w={100} style={{ height: value, backgroundColor: '#228be6', borderRadius: '4px' }} />
      <Text size="sm">{name}</Text>
      <Text size="xs" c="dimmed">{value}</Text>
    </Stack>
  </Paper>
);

export const Colors: Story = {
  render: () => (
    <Stack>
      <Text size="xl" fw={700}>Color Tokens</Text>
      
      <Text size="lg" fw={600}>Primary Colors</Text>
      <Group>
        {Array.from({ length: 10 }).map((_, i) => {
          const colorKey = `mantine-colors-blue-${i}` as const;
          const colorValue = tokens["Mantine/variables"][colorKey]?.$value;
          return colorValue ? (
            <ColorSwatch 
              key={`blue-${i}`}
              color={colorValue}
              name={`Blue ${i}`}
            />
          ) : null;
        })}
      </Group>

      <Text size="lg" fw={600}>Grayscale</Text>
      <Group>
        {Array.from({ length: 10 }).map((_, i) => {
          const colorKey = `mantine-colors-gray-${i}` as const;
          const colorValue = tokens["Mantine/variables"][colorKey]?.$value;
          return colorValue ? (
            <ColorSwatch
              key={`gray-${i}`}
              color={colorValue}
              name={`Gray ${i}`}
            />
          ) : null;
        })}
      </Group>
    </Stack>
  )
};

export const Typography: Story = {
  render: () => (
    <Stack>
      <Text size="xl" fw={700}>Typography Tokens</Text>
      
      <Text size="lg" fw={600}>Font Families</Text>
      <Stack>
        <Paper shadow="sm" p="md">
          <Text>Default Font: {tokens["Mantine/variables"]["mantine-typography-font-family"].$value}</Text>
        </Paper>
        <Paper shadow="sm" p="md">
          <Text>Monospace Font: {tokens["Mantine/variables"]["mantine-typography-font-family-monospace"].$value}</Text>
        </Paper>
        <Paper shadow="sm" p="md">
          <Text>Headings Font: {tokens["Mantine/variables"]["mantine-typography-font-family-headings"].$value}</Text>
        </Paper>
      </Stack>

      <Text size="lg" fw={600}>Heading Sizes</Text>
      <Stack>
        {(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const).map((level) => {
          const sizeKey = `mantine-headings-${level}-font-size` as const;
          const sizeValue = tokens["Mantine/variables"][sizeKey].$value;
          return (
            <Paper key={level} shadow="sm" p="md">
              <Text>{level}: {sizeValue}</Text>
            </Paper>
          );
        })}
      </Stack>
    </Stack>
  )
};

export const Spacing: Story = {
  render: () => (
    <Stack>
      <Text size="xl" fw={700}>Spacing Tokens</Text>
      
      <Group align="flex-start">
        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => {
          const spacingKey = `mantine-spacing-${size}` as const;
          const spacingValue = tokens["Mantine/variables"][spacingKey].$value;
          return (
            <SpacingSwatch
              key={size}
              value={spacingValue}
              name={`Spacing ${size}`}
            />
          );
        })}
      </Group>
    </Stack>
  )
};

export const Breakpoints: Story = {
  render: () => (
    <Stack>
      <Text size="xl" fw={700}>Breakpoint Tokens</Text>
      
      <Stack>
        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => {
          const breakpointKey = `mantine-breakpoints-${size}` as const;
          const breakpointValue = tokens["Mantine/variables"][breakpointKey].$value;
          return (
            <Paper key={size} shadow="sm" p="md">
              <Text>
                {size}: {breakpointValue}
              </Text>
            </Paper>
          );
        })}
      </Stack>
    </Stack>
  )
};