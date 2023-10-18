import type { Config } from 'tailwindcss'
const { nextui } = require('@nextui-org/react')

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				primary_color: '#4C6FFF',
				secondary_color: '#FF7800',
				title_color: '#102844',
				paragraph_color: '#767278',
				gray_shade_color: '#F8F8FB',
				primary_shade_color: '#E9EDFF',
				secondary_shade_color: '#FFEFE0',
			},
		},
	},
	darkMode: 'class',
	plugins: [nextui()],
}
export default config
