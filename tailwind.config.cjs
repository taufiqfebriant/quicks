const { fontFamily } = require('tailwindcss/defaultTheme'); // eslint-disable-line @typescript-eslint/no-var-requires

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...fontFamily.sans]
			}
		}
	},
	plugins: []
};
