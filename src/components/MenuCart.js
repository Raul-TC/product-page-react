import React from 'react'

const MenuCart = ({ counter, setCounter, setQuantity, setMenuCart }) => {
  console.info(counter)
  return (
    <div className='absolute z-10 bg-gray-100 w-[95%] h-auto top-0 left-0 right-0 m-auto mt-16 rounded-lg flex flex-col items-center justify-center sm:w-96 sm:right-0 sm:top-0 sm:left-auto sm:-mr-20 sm:-mt-28 sm:m-0'>
      <h2 className='py-5 pl-6 w-full border-b-2 font-bold'>Cart</h2>
      <div className={`${counter === 0 && 'flex items-center justify-center'} h-44 bg-inherit w-[90%]`}>
        {counter === 0
          ? <p>Your cart is empty.</p>
          : (
            <>
              <div className='flex justify-between items-center mt-3 mb-4'>
                <span className='bg-image-product w-[54px] h-[54px] block bg-cover rounded-lg' />
                <div>
                  <p>Autum Limited Edition...</p>
                  <p>$125.00 x {counter}
                    <span className='font-bold'>{` $${125 * counter}.00`}</span>
                  </p>
                </div>
                <span
                  onClick={() => {
                    setQuantity(0)
                    setCounter(0)
                    setMenuCart(false)
                  }} className='bg-icon-delete w-5 h-5 bg-no-repeat bg-contain'
                />
              </div>
              <button className='bg-orange-500 rounded-xl w-full py-4 cursor-pointer mt-2 font-bold text-gray-50'>Checkout</button>
            </>
            )}
      </div>
    </div>
  )
}

export default MenuCart
