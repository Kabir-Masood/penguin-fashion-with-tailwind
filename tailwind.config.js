/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            order: {
                '2': '2'
            }
        },
    },
    plugins: [],
}