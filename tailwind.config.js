/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'icon-hamburger': "url('/src/assets/icon-menu.svg')",
        'icon-close': "url('/src/assets/icon-close.svg')",
        'icon-cart': "url('/src/assets/icon-cart.svg')",
        'icon-cart-white': "url('/src/assets/icon-cart-white.svg')",
        user: "url('/src/assets/image-avatar.png')",
        'image-product': "url('/src/assets/image-product-1-thumbnail.jpg')",
        'icon-delete': "url('/src/assets/icon-delete.svg')",
        previous: "url('/src/assets/icon-previous.svg')",
        next: "url('/src/assets/icon-next.svg')",
        minus: "url('/src/assets/icon-minus.svg')",
        minusDisabled: "url('/src/assets/icon-minus-disabled.svg')",
        plus: "url('/src/assets/icon-plus.svg')"
      }
    }
  },
  plugins: []
}
