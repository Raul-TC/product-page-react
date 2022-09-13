import React, { useState } from 'react'

import img01 from '../assets/image-product-1.jpg'
import img02 from '../assets/image-product-2.jpg'
import img03 from '../assets/image-product-3.jpg'
import img04 from '../assets/image-product-4.jpg'
const ModalSlider = ({ isMobile, setModal, counterImages, setCounterImages }) => {
  const [counter, setCounter] = useState(counterImages)
  const images = [img01, img02, img03, img04]
  const handleCounter = (action) => {
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
    <div className='fixed z-50 w-full h-screen bg-[#474747d5] top-0 left-0 flex items-center justify-center'>
      <div className='left-0 top-0 right-0 bottom-0 m-auto'>
        <div className='flex flex-col h-auto w-[100%]'>
          <div className='w-[60%] h-80 relative m-auto md:h-auto '>

            <span onClick={() => setModal(false)} className='bg-closeModal h-8 w-8 bg-cover -top-12 absolute right-0 hover:bg-closeModalHover' />
            <div
              onClick={() => {
                setCounter(counter - 1)
                handleCounter('previous')
              }} className='bg-slate-100 h-16 w-16 absolute rounded-full flex items-center justify-center top-1/2 -mt-4 -ml-8 cursor-pointer'
            >
              <span className='bg-previous h-14 w-14   absolute bg-no-repeat bg-center mr-1 cursor-pointer hover:bg-previousHover' />
            </div>

            <img onClick={() => setModal(true)} className='h-full w-full object-cover rounded-xl' src={images[counter]} alt='' />

            <div
              onClick={() => {
                setCounter(counter + 1)
                handleCounter('next')
              }} className='bg-slate-100 h-16 w-16 absolute rounded-full flex items-center justify-center top-1/2 right-0 -mt-4 -mr-8 cursor-pointer'
            >
              <span className='bg-next h-14 w-14   absolute bg-no-repeat bg-center ml-1 cursor-pointer hover:bg-nextHover' />
            </div>

          </div>

          <div className='w-[60%] h-[7rem] m-auto mt-8 flex justify-between gap-10'>

            <div onClick={() => setCounter(0)} className={`${counter === 0 && 'border-2 border-orange-200'} block w-[25%] h-full rounded-xl cursor-pointer relative`}>
              <span className=' block bg-thumb1 w-full h-full bg-cover rounded-xl bg-no-repeat' />
              <div className={`${counter === 0 ? 'bg-[#e6e3e370]' : ''} absolute rounded-xl left-0 right-0 bottom-0 top-0 hover:bg-[#e6e3e370]`} />
            </div>
            <div onClick={() => setCounter(1)} className={`${counter === 1 && 'border-2 border-orange-200'} block w-[25%] h-full rounded-xl cursor-pointer relative`}>
              <span className=' block bg-thumb2 w-full h-full bg-cover rounded-xl bg-no-repeat' />
              <div className={`${counter === 1 ? 'bg-[#e6e3e370]' : ''} absolute rounded-xl left-0 right-0 bottom-0 top-0 hover:bg-[#e6e3e370]`} />
            </div>
            <div onClick={() => setCounter(2)} className={`${counter === 2 && 'border-2 border-orange-200'} block w-[25%] h-full rounded-xl cursor-pointer relative`}>
              <span className=' block bg-thumb3 w-full h-full bg-cover rounded-xl bg-no-repeat' />
              <div className={`${counter === 2 ? 'bg-[#e6e3e370]' : ''} absolute rounded-xl left-0 right-0 bottom-0 top-0 hover:bg-[#e6e3e370]`} />
            </div>
            <div onClick={() => setCounter(3)} className={`${counter === 3 && 'border-2 border-orange-200'} block w-[25%] h-full rounded-xl cursor-pointer relative`}>
              <span className=' block bg-thumb4 w-full h-full bg-cover rounded-xl bg-no-repeat' />
              <div className={`${counter === 3 ? 'bg-[#e6e3e370]' : ''} absolute rounded-xl left-0 right-0 bottom-0 top-0 hover:bg-[#e6e3e370]`} />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalSlider
