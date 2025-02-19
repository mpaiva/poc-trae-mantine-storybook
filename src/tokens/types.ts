type TokenType = 'color' | 'dimension' | 'typography' | 'number' | 'textCase' | 'textDecoration' | 'fontFamily' | 'string';
type TextCaseValue = 'none' | 'uppercase' | 'lowercase' | 'capitalize';
type TextDecorationValue = 'none' | 'underline' | 'line-through';

interface TokenValue<T, Type extends TokenType = TokenType> {
  $type: Type;
  $value: T;
  $description?: string;
}

type ColorToken = TokenValue<string, 'color'>;
type FontFamilyToken = TokenValue<string, 'fontFamily'>;
type StringToken = TokenValue<string, 'string'>;
type DimensionToken = TokenValue<string, 'dimension'>;
interface TypographyValue {
  fontFamily: string;
  fontWeight: string | number;
  fontSize: string;
  lineHeight: string | number;
  letterSpacing?: string;
  paragraphSpacing?: string;
  paragraphIndent?: string;
  textCase?: TextCaseValue;
  textDecoration?: TextDecorationValue;
}

type TypographyToken = TokenValue<TypographyValue, 'typography'>;
type NumberToken = TokenValue<number, 'number'>;

type ColorScale = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type ThemeVariant = 'light' | 'dark';
type BreakpointSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type SpacingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type FontSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface MantineVariables {
  // Color tokens
  [key: `mantine-colors-${string}-${ColorScale}`]: ColorToken;
  [key: `mantine-theme-${ThemeVariant}-color-${string}`]: ColorToken;
  [key: `mantine-primary-colors-${string}`]: ColorToken;

  // Breakpoint tokens
  [key: `mantine-breakpoints-${BreakpointSize}`]: DimensionToken;

  // Spacing tokens
  [key: `mantine-spacing-${SpacingSize}`]: DimensionToken;
  [key: `mantine-theme-${ThemeVariant}-spacing-${SpacingSize}`]: DimensionToken;

  // Typography tokens
  [key: `mantine-typography-font-family${string}`]: FontFamilyToken;
  [key: `mantine-font-sizes-${FontSize}`]: DimensionToken;
  [key: `mantine-headings-${HeadingLevel}-font-size`]: DimensionToken;
  [key: `mantine-headings-${HeadingLevel}-line-height`]: DimensionToken;
  [key: `mantine-headings-${HeadingLevel}-font-weight`]: NumberToken;

  // Additional theme-specific tokens
  palettes?: {
    [key: string]: ColorToken;
  };
}

interface DesignTokens {
  "Mantine/variables": MantineVariables;
}

declare const tokens: DesignTokens;
export default tokens;