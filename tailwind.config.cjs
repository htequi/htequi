/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	future: {
		hoverOnlyWhenSupported: true
	},
	theme: {
		extend: {
			transitionTimingFunction: {
				elastic: 'cubic-bezier(0.5, 1.75, 0.75, 1.25)'
			},
			colors: {
				'primary-1': 'oklch(50.74% 0.286 262.06)',
				'primary-2': 'oklch(56.32% 0.257 257.82)'
			},
			fontFamily: {
				display: 'Avara_Bold'
			},
			fontSize: {
				'fl-2': 'clamp(0.78rem, calc(0.77rem + 0.03vw), 0.80rem)',
				'fl-1': 'clamp(0.94rem, calc(0.92rem + 0.11vw), 1.00rem)',
				'fl-0': 'clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)',
				'fl-1': 'clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem)',
				'fl-2': 'clamp(1.62rem, calc(1.50rem + 0.58vw), 1.95rem)',
				'fl-3': 'clamp(1.94rem, calc(1.77rem + 0.87vw), 2.44rem)',
				'fl-4': 'clamp(2.33rem, calc(2.08rem + 1.25vw), 3.05rem)',
				'fl-5': 'clamp(2.80rem, calc(2.45rem + 1.77vw), 3.82rem)',
				'fl-6': 'clamp(3.36rem, calc(2.87rem + 2.45vw), 4.77rem)'
			},
			spacing: {
				'3xs': 'clamp(0.31rem, calc(0.31rem + 0.00vw), 0.31rem)',
				'2xs': 'clamp(0.56rem, calc(0.54rem + 0.11vw), 0.63rem)',
				xs: 'clamp(0.88rem, calc(0.85rem + 0.11vw), 0.94rem)',
				s: 'clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)',
				m: 'clamp(1.69rem, calc(1.62rem + 0.33vw), 1.88rem)',
				l: 'clamp(2.25rem, calc(2.16rem + 0.43vw), 2.50rem)',
				xl: 'clamp(3.38rem, calc(3.24rem + 0.65vw), 3.75rem)',
				'2xl': 'clamp(4.50rem, calc(4.33rem + 0.87vw), 5.00rem)',
				'3xl': 'clamp(6.75rem, calc(6.49rem + 1.30vw), 7.50rem)'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
