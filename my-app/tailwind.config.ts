import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "background" : "#171a24",
        "foreground" : "#282a36",
        "green" : "#50fa7b",
        "pink" : "#ff79c6",
        "orange" : "#ffb86c",
        "white" : "#f8f8f2",
        "yellow" : "#f1fa8c",
        "red" : "#ff5555",
        "green-dark" : "#40C862"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
