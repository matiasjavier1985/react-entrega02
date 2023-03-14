export default {
    content: ['./*.html', './src/**/*.{vue,js,ts,jsx,tsx,css}'],
    theme: {
        
        screens:{
            'xs':'425px',
                // => @media (min-width: 425px) { ... }
            'sm': '640px',
                // => @media (min-width: 640px) { ... }

            'md': '768px',
                // => @media (min-width: 768px) { ... }

            'lg': '1024px',
                // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
                // => @media (min-width: 1280px) { ... }
        },
        },
        variants: {
            extend: {},
        },
        plugins: [],
}