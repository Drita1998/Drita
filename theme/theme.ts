// theme.ts
// Mobile-first design tokens for Drita (Expo + React Native + TypeScript)
// Visual identity: light, warmth, dignity, permanence

export const colors = {
  brand: {
    // Core identity — gold / amber / bronze
    900: '#5C3A12', // deep bronze
    700: '#9A5A1E', // burnt gold
    500: '#E0A43A', // amber (primary brand color)
  },

  accent: {
    warm: '#F2B705',     // sun-gold highlight (use sparingly)
    success: '#1E8E5A',  // grounded green
    warning: '#D97706',  // orange-amber
    error: '#B42318',    // deep red (serious, not loud)
  },

  neutral: {
    bg: '#F7F8FA',       // app background (light mode)
    surface: '#FFFFFF',  // cards / sheets
    border: '#E6E9EE',
    text: '#111827',     // primary text
    muted: '#4B5563',
    meta: '#6B7280',
  },

  shadow: 'rgba(92, 58, 18, 0.12)', // warm shadow (not blue-gray)
};

export const typography = {
  fontFamily: {
    regular: 'System',
    medium: 'System',
    bold: 'System',
  },

  scale: {
    display: 32,
    h1: 28,
    h2: 22,
    h3: 18,
    body: 16,
    small: 14,
    caption: 12,
  },

  weights: {
    regular: '400' as const,
    medium: '600' as const,
    bold: '700' as const,
  },

  leading: {
    display: 36,
    h1: 32,
    h2: 28,
    h3: 24,
    body: 22,
    small: 20,
    caption: 16,
  },

  letterSpacing: {
    tight: -0.2,
    normal: 0,
    loose: 0.2,
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

export const radii = {
  sm: 8,
  md: 12,
  lg: 16,
  round: 999,
};

export const sizes = {
  avatar: {
    small: 32,
    medium: 44,
    large: 64,
  },
  icon: 20,
  touchable: 44,
};

export const shadows = {
  subtle: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2,
  },

  card: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 4,
  },
};

export const theme = {
  colors,
  typography,
  spacing,
  radii,
  sizes,
  shadows,
};

export type Theme = typeof theme;
