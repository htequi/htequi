const tailwind = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const presetEnv = require('postcss-preset-env')
module.exports = {
	plugins: [
		tailwind(),
		presetEnv({
			'oklab-function': true
		}),
		autoprefixer()
	]
}
