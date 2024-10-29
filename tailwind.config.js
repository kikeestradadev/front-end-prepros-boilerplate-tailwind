// tailwind.config.js
module.exports = {
	content: [
		'**/*.html',
		'**/*.php',
		'**/*.js',
		'!wp-admin',
		'!wp-includes',
		'!node_modules',
		'!Prepros Export'
	],
	theme: {
		extend: {
			fontFamily: {
				inter: ['"Inter"', 'sans-serif'],
			},
		},
		screens: {
			
			sm: 	'480px',
			m: 		'640px',
			l: 		'960px',
			lg: 	'1280px',
			xl: 	'1600px',
			xxl: 	'1800px',
			xxxl: 	'1920px',
		},
	},
};
