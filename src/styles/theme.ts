export const mainTheme = {
  name: 'Academic Portfolio',
  colors: {
    light: {
      primary: '26 58 92',   // Deep navy - authoritative
      accent: '114 83 52',   // Rich bronze - established
      success: '42 157 143', // Emerald - expertise
      foreground: '43 45 66', // Charcoal - clarity
      background: '244 241 222', // Ivory - academic
      muted: '112 66 20',    // Warm brown - grounding
    },
    dark: {
      primary: '42 157 143',  // Emerald takes focus
      accent: '114 83 52',    // Bronze maintains authority
      success: '26 58 92',    // Navy becomes secondary
      foreground: '244 241 222', // Ivory for text
      background: '43 45 66',  // Charcoal background
      muted: '112 66 20',     // Warm brown maintains grounding
    }
  },
  heroIcons: [
    {
      icon: 'GraduationCap',
      label: 'Academia',
      className: 'text-primary'
    },
    {
      icon: 'BookOpen',
      label: 'Publications',
      className: 'text-accent'
    },
    {
      icon: 'LineChart',
      label: 'Research',
      className: 'text-success'
    }
  ]
};