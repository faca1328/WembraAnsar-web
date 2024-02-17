/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
			  'phone': '450px',
			},
		  },
		colors: {
			'cream': {
				'50': '#fefde8',
				'100': '#fdfbc4',
				'200': '#fcf58c',
				'300': '#fae74a',
				'400': '#f6d519',
				'500': '#e6bc0c',
				'600': '#c79307',
				'700': '#9e690a',
				'800': '#835310',
				'900': '#6f4414',
				'950': '#412307',
			},
			'blue-dianne': {
				'50': '#f2f9f8',
				'100': '#ddf0f0',
				'200': '#bfe2e1',
				'300': '#92cdce',
				'400': '#5fafb1',
				'500': '#439497',
				'600': '#3a7980',
				'700': '#356469',
				'800': '#315359',
				'900': '#2b4449',
				'950': '#1a2e32',
			},
			'daintree': {
				'50': '#e9fffd',
				'100': '#c9fffb',
				'200': '#99fffb',
				'300': '#54fffb',
				'400': '#07f9ff',
				'500': '#00daef',
				'600': '#00aec9',
				'700': '#008aa1',
				'800': '#086e82',
				'900': '#0c5a6d',
				'950': '#001e26',
			},

		},
	},
	plugins: [
		require('tailwindcss-animated'),
		require('flowbite/plugin')
	],
}
