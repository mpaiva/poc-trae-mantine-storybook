import type { Preview } from "@storybook/react";
import { MantineProvider, createTheme } from '@mantine/core';
import React from 'react';
import '@mantine/core/styles.css';
import tokens from '../src/tokens/tokens.json';

const theme = createTheme({
  colors: {
    blue: [
      tokens["Mantine/variables"]["mantine-colors-blue-0"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-blue-1"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-blue-2"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-blue-3"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-blue-4"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-blue-5"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-blue-6"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-blue-7"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-blue-8"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-blue-9"]?.["$value"] || '#000000',
    ] as const,
    gray: [
      tokens["Mantine/variables"]["mantine-colors-gray-0"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-gray-1"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-gray-2"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-gray-3"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-gray-4"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-gray-5"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-gray-6"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-gray-7"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-gray-8"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-gray-9"]?.["$value"] || '#000000',
    ] as const,
    red: [
      tokens["Mantine/variables"]["mantine-colors-red-0"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-red-1"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-red-2"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-red-3"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-red-4"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-red-5"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-red-6"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-red-7"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-red-8"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-red-9"]?.["$value"] || '#000000',
    ] as const,
    green: [
      tokens["Mantine/variables"]["mantine-colors-green-0"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-green-1"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-green-2"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-green-3"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-green-4"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-green-5"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-green-6"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-green-7"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-green-8"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-green-9"]?.["$value"] || '#000000',
    ] as const,
    orange: [
      tokens["Mantine/variables"]["mantine-colors-orange-0"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-orange-1"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-orange-2"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-orange-3"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-orange-4"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-orange-5"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-orange-6"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-orange-7"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-orange-8"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-orange-9"]?.["$value"] || '#000000',
    ] as const,
    pink: [
      tokens["Mantine/variables"]["mantine-colors-pink-0"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-pink-1"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-pink-2"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-pink-3"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-pink-4"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-pink-5"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-pink-6"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-pink-7"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-pink-8"]?.["$value"] || '#000000',
      tokens["Mantine/variables"]["mantine-colors-pink-9"]?.["$value"] || '#000000',
    ] as const
  },
  fontFamily: tokens["Mantine/variables"]["mantine-typography-font-family"]["$value"],
  fontFamilyMonospace: tokens["Mantine/variables"]["mantine-typography-font-family-monospace"]["$value"],
  headings: {
    fontFamily: tokens["Mantine/variables"]["mantine-typography-font-family-headings"]["$value"],
    fontWeight: tokens["Mantine/variables"]["mantine-typography-heading-font-weight"]["$value"],
    sizes: {
      h1: { fontSize: tokens["Mantine/variables"]["mantine-headings-h1-font-size"]["$value"] },
      h2: { fontSize: tokens["Mantine/variables"]["mantine-headings-h2-font-size"]["$value"] },
      h3: { fontSize: tokens["Mantine/variables"]["mantine-headings-h3-font-size"]["$value"] },
      h4: { fontSize: tokens["Mantine/variables"]["mantine-headings-h4-font-size"]["$value"] },
      h5: { fontSize: tokens["Mantine/variables"]["mantine-headings-h5-font-size"]["$value"] },
      h6: { fontSize: tokens["Mantine/variables"]["mantine-headings-h6-font-size"]["$value"] }
    }
  },
  spacing: {
    xs: tokens["Mantine/variables"]["mantine-spacing-xs"]["$value"],
    sm: tokens["Mantine/variables"]["mantine-spacing-sm"]["$value"],
    md: tokens["Mantine/variables"]["mantine-spacing-md"]["$value"],
    lg: tokens["Mantine/variables"]["mantine-spacing-lg"]["$value"],
    xl: tokens["Mantine/variables"]["mantine-spacing-xl"]["$value"]
  },
  breakpoints: {
    xs: tokens["Mantine/variables"]["mantine-breakpoints-xs"]["$value"],
    sm: tokens["Mantine/variables"]["mantine-breakpoints-sm"]["$value"],
    md: tokens["Mantine/variables"]["mantine-breakpoints-md"]["$value"],
    lg: tokens["Mantine/variables"]["mantine-breakpoints-lg"]["$value"],
    xl: tokens["Mantine/variables"]["mantine-breakpoints-xl"]["$value"]
  },
  other: {
    scale: tokens["Mantine/variables"]["mantine-settings-scale"]["$value"],
    cursorType: tokens["Mantine/variables"]["mantine-settings-cursor-type"]["$value"],
    colorScheme: tokens["Mantine/variables"]["mantine-settings-color-scheme"]["$value"]
  }
});

const preview: Preview = {
  decorators: [
    (Story) => (
      <MantineProvider theme={theme}>
        <Story />
      </MantineProvider>
    ),
  ],
};

export default preview;