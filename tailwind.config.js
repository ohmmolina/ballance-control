/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}
module.exports = {
  darkMode: 'class',
  content: ["node_modules/flowbite/**/*.{js,jsx,ts,tsx}",'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      colors: {
        white: '#f2f2f2',
        black: '#0a0a0a',
      },
      fontFamily: {
        martel: ['Martel', 'serif'],
        rubik: ['Rubik', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
  safelist: [
    {
      pattern: /bg-(white)/,
      variants: ['hover', 'focus', 'active', 'dark', 'dark:hover', 'dark:focus', 'dark:active', 'disabled', 'before'],
    },
    {
      pattern: /bg-(red|green|blue|purple)-(200|300|400|500|600|700|800|900)/,
      variants: ['hover', 'focus', 'active', 'dark', 'dark:hover', 'dark:focus', 'dark:active','disabled', 'before'],
    },
    {
      pattern: /text-(red|green|blue|purple)-(200|300|400|500|600|700|800|900)/,
      variants: ['hover', 'focus', 'active', 'dark', 'dark:hover', 'dark:focus', 'dark:active','disabled', 'before'],
    },
    {
      pattern: /border-(red|green|blue|purple)-(200|300|400|500|600|700|800|900)/,
      variants: ['hover', 'focus', 'active', 'dark', 'dark:hover', 'dark:focus', 'dark:active','disabled', 'before'],
    },
    {
      pattern: /shadow-(red|green|blue|purple)-(200|300|400|500|600|700|800|900)/,
      variants: ['hover', 'focus', 'active', 'dark', 'dark:hover', 'dark:focus', 'dark:active','disabled', 'before'], 
    },
  ]
};
