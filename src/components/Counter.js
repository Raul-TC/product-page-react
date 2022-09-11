import React from 'react'

export const Counter = ({ counter, setCounter, isMobile }) => {
  return (
  // <div className='flex w-full justify-between items-center mt-4 mb-4 bg-slate-100 py-4 px-4 rounded-lg'>
    <div className={`${isMobile ? 'w-full' : ''}  flex items-center justify-between w-32 mt-4 bg-slate-100 p-4 rounded-lg`}>
      <button onClick={() => setCounter(counter - 1)} className={`${counter === 0 ? 'bg-minusDisabled' : 'bg-minus'} h-5 w-5 bg-no-repeat bg-contain bg-center`} disabled={counter === 0} />
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)} className='bg-plus  h-5 w-5 bg-no-repeat bg-contain bg-center' />
    </div>
  )
}
