import React from 'react'

const Button = ({ counter, setQuantity, setMenuCart }) => {
  return (
    <button
      onClick={() => {
        setQuantity(counter)
        setMenuCart(true)
      }} className={`${counter === 0 ? 'bg-gray-600' : 'bg-orange-500'} rounded-xl w-full py-4 cursor-pointer mt-2 font-bold text-gray-50 flex justify-center items-center`} disabled={counter === 0}
    >
      <span className='bg-icon-cart-white h-6 w-6 bg-no-repeat bg-contain mr-2' />
      <p>Add to Cart</p>

    </button>
  )
}

export default Button
