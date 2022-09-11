import React from 'react'
import img01 from '../assets/image-product-1.jpg'
import img02 from '../assets/image-product-2.jpg'
import img03 from '../assets/image-product-3.jpg'
import img04 from '../assets/image-product-4.jpg'
const Slider = ({ isMobile, setModal, counterImages, setCounterImages }) => {
  const images = [img01, img02, img03, img04]

  const handleCounter = (action) => {
    if (action === 'next') {
      if (counterImages >= images.length - 1) {
        setCounterImages(0)
      }
    }

    if (action === 'previous') {
      if (counterImages <= 0) {
        setCounterImages(images.length - 1)
      }
    }
  }
  return (
    <div className='flex flex-col h-auto w-full md:w-[60%]'>
      <div className=' w-full md:w-[60%] h-80 relative m-auto md:h-auto '>
        {isMobile && (
          <>
            <div
              onClick={() => {
                setCounterImages(counterImages - 1)
                handleCounter('previous')
              }} className='bg-slate-100 h-10 w-10 absolute rounded-full flex items-center justify-center top-1/2 -mt-4 ml-6'
            >
              <span className='bg-previous h-7 w-7   absolute bg-no-repeat bg-center ' />
            </div>
          </>

        )}
        <img onClick={() => isMobile ? null : setModal(true)} className='h-full w-full object-cover md:rounded-xl' src={images[counterImages]} alt='' />
        {isMobile && (
          <>
            <div
              onClick={() => {
                setCounterImages(counterImages + 1)
                handleCounter('next')
              }} className='bg-slate-100 h-10 w-10 absolute rounded-full flex items-center justify-center top-1/2 right-0 -mt-4 mr-6'
            >
              <span className='bg-next h-7 w-7   absolute bg-no-repeat bg-center  ' />
            </div>
          </>
        )}
      </div>

      {!isMobile &&
        <>
          <div className='w-[60%] h-[7rem] m-auto mt-8 flex justify-between '>
            <span onClick={() => setCounterImages(0)} className='bg-thumb2 w-[23%] bg-cover bg-no-repeat rounded-xl cursor-pointer' />
            <span onClick={() => setCounterImages(1)} className='bg-thumb1 w-[23%] bg-cover bg-no-repeat rounded-xl cursor-pointer' />
            <span onClick={() => setCounterImages(2)} className='bg-thumb3 w-[23%] bg-cover bg-no-repeat rounded-xl cursor-pointer' />
            <span onClick={() => setCounterImages(3)} className='bg-thumb4 w-[23%] bg-cover bg-no-repeat rounded-xl cursor-pointer' />
          </div>

        </>}
    </div>
  )
}

export default Slider
