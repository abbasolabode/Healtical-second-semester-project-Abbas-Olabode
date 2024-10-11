/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			screens: {
				laptop: "1512px",
			},

			fontFamily: {
				poppins: ['"Poppins", "sans-serif"'],
			},

			colors: {
				primaryColor: 'hsla(213, 100%, 35%, 1)',
				primaryContainer: 'hsla(204, 100%, 91%, 1)',
				secondaryColor: 'hsla(120, 2%, 33%, 1)',
				contactColor:  'hsla(120, 3%, 34%, 1)',
				placeholderColor: 'hsla(0, 0%, 71%, 1)',

			}
		},
	},
	plugins: [],
};

