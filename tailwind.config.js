// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite', // Aap duration ko component me override kar rahe hain, jo theek hai
      },
      // Yeh animation-delay classes ke liye hai
      animationDelay: {
        1000: '1000ms',
        2000: '2000ms',
        3000: '3000ms',
        4000: '4000ms',
        5000: '5000ms',
      },
    },
  },
  // animation-delay plugin (agar install kiya hai toh)
  plugins: [
     require('tailwindcss-animation-delay'), // Agar aapne yeh plugin use kiya hai
  ],
};