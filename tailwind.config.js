/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black:    '#0f0f0f',
        dark:     '#1a1a1a',
        paper:    '#f4f4f2',
        smoke:    '#222222',
        grey:     '#8a8a8a',
        hairline: '#2a2a2a',
        yellow:   'rgb(0,189,217)',   /* Maveric cyan maps to GMH yellow */
        red:      'rgb(0,189,217)',   /* same — GMH uses red=yellow for accent */
        white:    '#ffffff',
        /* legacy compat */
        bg:       '#0f0f0f',
        surface:  '#1a1a1a',
        accent:   'rgb(0,189,217)',
        purple:   '#6e76d6',
        muted:    '#8a8a8a',
        border:   '#2a2a2a',
      },
      fontFamily: {
        sans:    ['Montserrat', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['Fragment Mono', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        site: '1600px',
      },
    },
  },
  plugins: [],
}
