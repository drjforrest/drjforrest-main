import { themeTokens, semanticTokens } from './tokens';

export const themeConfig = {
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        primary: 'rgb(var(--primary))',
        accent: 'rgb(var(--accent))',
        success: 'rgb(var(--success))',
        muted: 'rgb(var(--muted))',
        surface: {
          DEFAULT: 'rgb(var(--surface-base))',
          muted: 'rgb(var(--surface-muted))',
          elevated: 'rgb(var(--surface-elevated))',
        },
        border: 'rgb(var(--border))',
      },
      spacing: semanticTokens.spacing,
      borderRadius: semanticTokens.radius,
      transitionDuration: semanticTokens.animation,
    },
  },
};