import React from 'react'

export const Counter = ({ counter, setCounter, isMobile }) => {
  return (
    <div className={`${isMobile ? 'w-full' : 'w-32'}  flex items-center justify-between mt-2 bg-slate-100 p-4 rounded-lg`}>
      <button onClick={() => setCounter(counter - 1)} className={`${counter === 0 ? 'bg-minusDisabled' : 'bg-minus'} h-5 w-5 bg-no-repeat bg-contain bg-center`} disabled={counter === 0} />
      <p className='font-bold'>{counter}</p>
      <button onClick={() => setCounter(counter + 1)} className='bg-plus  h-5 w-5 bg-no-repeat bg-contain bg-center' />
    </div>
  )
}
