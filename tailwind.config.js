/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'icon-hamburger': "url('/src/assets/icon-menu.svg')",
        'icon-close': "url('/src/assets/icon-close.svg')",
        'icon-cart': "url('/src/assets/icon-cart.svg')",
        user: "url('/src/assets/image-avatar.png')",
        'image-product': "url('/src/assets/image-product-1-thumbnail.jpg')",
        'icon-delete': "url('/src/assets/icon-delete.svg')"
      }
    }
  },
  plugins: []
}
