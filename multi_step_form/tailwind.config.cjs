/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            screens: {
                "3xl": "1920px",
                "4xl": "2300px",
            },
            container: {
                "3xl": "1800px",
            },
            backgroundImage: {
                "side-bar-bg-desktop": "url('/images/bg-sidebar-desktop.svg')",
                "side-bar-bg-mobile": "url('/images/bg-sidebar-mobile.svg')",
                footer: "url('/images/Group_1.svg')",
                "footer-2k": "url('/images/footer-2k.svg')",
            },
            colors: {
                "marine-blue": "hsl(213, 96%, 18%)",
                "purplish-blue": "hsl(243, 100%, 62%)",
                "pastel-blue": "hsl(228, 100%, 84%)",
                "light-blue": "hsl(206, 94%, 87%)",
                "strawberry-red": "hsl(354, 84%, 57%)",

                // Neutral
                "cool-gray": "hsl(231, 11%, 63%)",
                "light-gray": "hsl(229, 24%, 87%)",
                magnolia: "hsl(217, 100%, 97%)",
                alabaster: "hsl(231, 100%, 99%)",
                White: "hsl(0, 0%, 100%)",
            },

            borderRadius: {
                circle: "22px",
            },
        },
    },
    plugins: [],
};
