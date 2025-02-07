import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        primary: 'rgb(var(--primary))',
        accent: 'rgb(var(--accent))',
        success: 'rgb(var(--success))',
        muted: 'rgb(var(--muted))',
        surface: {
          DEFAULT: 'rgb(var(--surface))',
          muted: 'rgb(var(--surface-muted))',
          elevated: 'rgb(var(--surface-elevated))',
        },
        border: 'rgb(var(--border))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'rgb(var(--foreground))',
            a: {
              color: 'rgb(var(--primary))',
              '&:hover': {
                color: 'rgb(var(--primary) / 0.8)',
              },
            },
            h1: {
              color: 'rgb(var(--foreground))',
            },
            h2: {
              color: 'rgb(var(--foreground))',
            },
            h3: {
              color: 'rgb(var(--foreground))',
            },
            h4: {
              color: 'rgb(var(--foreground))',
            },
            blockquote: {
              color: 'rgb(var(--foreground) / 0.8)',
              borderLeftColor: 'rgb(var(--primary) / 0.2)',
            },
            code: {
              color: 'rgb(var(--foreground))',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: 'rgb(var(--muted) / 0.1)',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config