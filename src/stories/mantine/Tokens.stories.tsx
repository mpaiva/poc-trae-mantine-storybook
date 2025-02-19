import { Box, Stack, Text, Title } from '@mantine/core';
import tokens from '../../tokens/tokens.json';
import type { ColorToken, DimensionToken } from '../../tokens/types';

export default {
  title: 'Design System/Tokens',
  parameters: {
    layout: 'fullscreen',
  },
};

interface ColorSwatchProps {
  color: string;
  name: string;
}

interface SpacingSwatchProps {
  size: string;
  name: string;
}

const ColorSwatch = ({ color, name }: ColorSwatchProps) => (
  <Box>
    <Box
      w={100}
      h={100}
      style={{
        backgroundColor: color,
        border: '1px solid #eee',
        borderRadius: '4px',
        marginBottom: '8px',
      }}
    />
    <Text size="sm">{name}</Text>
    <Text size="xs" color="dimmed">
      {color}
    </Text>
  </Box>
);

const SpacingSwatch = ({ size, name }: SpacingSwatchProps) => (
  <Box mb="md">
    <Box
      w={size}
      h="24px"
      bg="blue.5"
      style={{
        borderRadius: '4px',
      }}
    />
    <Text size="sm" mt="xs">
      {name}
    </Text>
    <Text size="xs" color="dimmed">
      {size}
    </Text>
  </Box>
);

export const Overview = () => {
  const mantineVars = tokens['Mantine/variables'];

  return (
    <Stack p="xl" gap="xl">
      <section>
        <Title order={2} mb="lg">
          Colors
        </Title>
        <Box
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
            gap: '24px',
          }}
        >
          {Object.entries(mantineVars)
            .filter(([key]) => key.includes('color'))
            .map(([key, value]) => (
              <ColorSwatch
                key={key}
                color={(value as ColorToken).$value}
                name={key.replace('mantine-colors-', '')}
              />
            ))}
        </Box>
      </section>

      <section>
        <Title order={2} mb="lg">
          Spacing
        </Title>
        <Stack>
          {Object.entries(mantineVars)
            .filter(([key]) => key.includes('spacing'))
            .map(([key, value]) => (
              <SpacingSwatch
                key={key}
                size={(value as DimensionToken).$value}
                name={key.replace('mantine-spacing-', '')}
              />
            ))}
        </Stack>
      </section>

      <section>
        <Title order={2} mb="lg">
          Typography
        </Title>
        <Stack gap="md">
          {Object.entries(mantineVars)
            .filter(([key]) => key.includes('font-size'))
            .map(([key, value]) => (
              <Box key={key}>
                <Text size={key.replace('mantine-font-sizes-', '')}>
                  {key.replace('mantine-font-sizes-', '')} - {(value as DimensionToken).$value}
                </Text>
              </Box>
            ))}
        </Stack>
      </section>
    </Stack>
  );
};