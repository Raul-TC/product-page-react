import React, { useState } from 'react'
import img01 from '../assets/image-product-1.jpg'
import img02 from '../assets/image-product-2.jpg'
import img03 from '../assets/image-product-3.jpg'
import img04 from '../assets/image-product-4.jpg'
const Slider = () => {
  const [counter, setCounter] = useState(0)
  const images = [img01, img02, img03, img04]

  const handleCounter = (action) => {
    console.info(counter)

    if (action === 'next') {
      if (counter >= images.length - 1) {
        setCounter(0)
      }
    }

    if (action === 'previous') {
      if (counter <= 0) {
        setCounter(images.length - 1)
      }
    }
  }
  return (
    <div className='w-full h-80 relative'>
      <div
        onClick={() => {
          setCounter(counter - 1)
          handleCounter('previous')
        }} className='bg-slate-100 h-10 w-10 absolute rounded-full flex items-center justify-center top-1/2 -mt-4 ml-6'
      >
        <span className='bg-previous h-7 w-7   absolute bg-no-repeat bg-center ' />
      </div>
      <img className='h-full w-full object-cover' src={images[counter]} alt='' />
      <div
        onClick={() => {
          setCounter(counter + 1)
          handleCounter('next')
        }} className='bg-slate-100 h-10 w-10 absolute rounded-full flex items-center justify-center top-1/2 right-0 -mt-4 mr-6'
      >
        <span className='bg-next h-7 w-7   absolute bg-no-repeat bg-center ' />
      </div>
    </div>
  )
}

export default Slider
