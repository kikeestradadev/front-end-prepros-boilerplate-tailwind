// tailwind.config.js
module.exports = {
	mode: 'jit', // Activa el modo JIT
	content: [
		'**/*.html',
		'**/*.php',
		'**/*.js',
		'!wp-admin',
		'!wp-includes',
		'!node_modules',
		'!Prepros Export'
	],
	plugins: [require('@tailwindcss/typography')],
	theme: {
		container: {
			center: true, // Centra el contenedor
			screens: {
				DEFAULT: '100%', // Configura el ancho del contenedor para todas las pantallas
				xl: '1600px', // Máximo ancho de 1600px para pantallas grandes
			},
		},
		screens: {
			sm: '480px',
			m: '640px',
			l: '960px',
			lg: '1280px',
			xl: '1600px',
			xxl: '1800px',
			xxxl: '1920px',
		},
	},
};
