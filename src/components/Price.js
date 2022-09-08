import React from 'react'

const Price = () => {
  return (
    <div className='flex w-full justify-between items-center mt-6'>

      <div className='flex items-center justify-between'>
        <span className='text-3xl font-bold'>$125.00</span>
        <span className='ml-3 bg-orange-100 text-orange-600 font-bold py-1 px-2 rounded-md'>50%</span>
      </div>
      <div className='font-bold text-gray-300 line-through'><p>$250.00</p></div>
    </div>
  )
}

export default Price
