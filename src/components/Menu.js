import React from 'react'

const Menu = ({ menu, setMenu }) => {
  const user = ['Collections', 'Men', 'Women', 'About', 'Contact']
  console.info(user)
  return (
    <div className={`${menu && 'bg-[#20202011] w-full h-screen fixed z-20 top-0 bottom-0'}`}>
      {menu && (
        <>
          <div className='bg-white w-3/5 h-screen pl-6 pt-4'>
            <span onClick={() => setMenu(!menu)} className='block bg-icon-close w-5 h-5 bg-no-repeat bg-contain bg-center mb-12' />
            <ul className='flex flex-col gap-y-4'>
              {user.map(el => <li key={el} className='font-bold'>{el}</li>)}
            </ul>
          </div>
        </>
      )}

      <ul className='flex gap-x-3'>
        {user.map(el => <li key={el} className='text-gray-500'>{el}</li>)}
      </ul>

    </div>
  )
}

export default Menu
