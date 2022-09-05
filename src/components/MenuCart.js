import React from 'react'

const MenuCart = ({ counter }) => {
  return (
    <div className='absolute z-10  bg-gray-100 w-[95%] h-auto top-0 left-0 right-0 m-auto mt-16 rounded-lg flex flex-col items-center justify-center'>
      <h2 className='py-5 pl-6 w-full border-b-2 font-bold'>Cart</h2>
      <div className='h-44 bg-inherit w-[90%] '>
        {counter === 0
          ? <p>Your cart is empty.</p>
          : (
            <>
              <div className='flex justify-between items-center mt-3 mb-4'>
                <span className='bg-image-product w-[54px] h-[54px] block bg-cover rounded-lg' />
                <div>
                  <p>Autum Limited Edition...</p>
                  <p>$125.00 x {counter}
                    <span className='font-bold'>{`$${125 * counter}.00`}</span>
                  </p>
                </div>
                <span className='bg-icon-delete w-5 h-5 bg-no-repeat bg-contain' />
              </div>
              <button className='bg-orange-500 rounded-xl w-full py-4 cursor-pointer mt-2 font-bold text-gray-50'>Checkout</button>
            </>
            )}
      </div>
    </div>
  )
}

export default MenuCart
