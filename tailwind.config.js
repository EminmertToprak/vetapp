/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: ['./app/**/*.{js,jsx,ts,tsx}', './screens/**/*.{js,jsx,ts,tsx}'],
	presets: [require('nativewind/preset')],
	theme: {
		colors: {
			'text': '#333333',
			'primary': '#4A90E2',
			'secondary': '#A3D9A5',
			'accent': '#FFA726',
			'background': '#F5F5DC',
			'complementary': '#D3D3D3',
		},
		extend: {
			backgroundImage: {
				hero: "url('../assets/splash.png')",
			},
		},
	},
	plugins: [],
};
