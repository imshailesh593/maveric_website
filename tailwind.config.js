/** @type {import('tailwindcss').Config} */

function cv(variable) {
  return ({ opacityValue }) =>
    opacityValue !== undefined
      ? `rgba(var(${variable}), ${opacityValue})`
      : `rgb(var(${variable}))`
}

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:          cv('--c-bg'),
        surface:     cv('--c-surface'),
        'surface-2': cv('--c-surface2'),
        accent:      cv('--c-accent'),
        purple:      cv('--c-orange'),
        muted:       cv('--c-muted'),
        border:      cv('--c-border'),
      },
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
        mono:    ['Fragment Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
