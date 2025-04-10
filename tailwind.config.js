/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx}", // If you use a components folder
        "./app/**/*.{js,ts,jsx,tsx}",       // For Next.js /app router
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
