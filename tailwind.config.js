/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                ieee: {
                    blue: '#00629B',
                    cyan: '#00B5E2',
                    orange: '#FFA400',
                    darkBlue: '#002855',
                    lightGray: '#F8F9FA',
                },
            },
            fontFamily: {
                sans: ['Open Sans', 'sans-serif'],
                mono: ['Source Code Pro', 'monospace'],
            },
        },
    },
    plugins: [],
}
