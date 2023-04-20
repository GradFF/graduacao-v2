/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
    darkMode: "class",
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        colors: {
            transparent: "transparent",
            base: colors.slate,
            primary: colors.sky,

            danger: colors.yellow,
        },
        fontFamily: { sans: ["Poppins", "sans-serif"] },
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
};
