/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./templates/*.html',
		'./templates/*.twig',
		'./templates/partial/*.twig',
		'./templates/blocks/*.twig',
		// Add paths to your Twig templates or any files using Tailwind classes
	],
	theme: {
		extend: {
			colors: {
				primary: '#010813', // Add your custom primary color
				secondary: '#6574cd', // Add your custom secondary color
				debug: '#FFCA28', // Just so you can see how this is powerful
				cream: '#FFF9E0',
				grey: '#AAA8A0',
				yellow: '#FFC400',
				// Add more custom colors as needed
			},
			fontFamily: {
				//font files are declared in html-header.twig file
				'sans': ['"Inria Sans"', 'sans-serif'],
			},
		}
	},
	plugins: [],
}

