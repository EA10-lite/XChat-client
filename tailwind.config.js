/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
	extend: {
		colors: {
			primary: '#FF7622',
			primary_light: '#FFF1F2',
			secondary: '#98A8B8',
			dark: '#121223',
			white: '#fff',
			error: '#FF218C',
			success: '#4bb543'
		},
		screens: {
			sm: '576px',
			md: '768px',
			lg: '991px',
			xl: '1280px'
		},
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		}
	}
},
plugins: [require("tailwindcss-animate")],
};