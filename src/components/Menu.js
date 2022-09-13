import React from 'react'

const Menu = ({ menu, setMenu }) => {
  const user = ['Collections', 'Men', 'Women', 'About', 'Contact']
  console.info(user)
  return (
    <div className={`${menu ? 'bg-[#20202011] w-full h-screen fixed z-20 top-0 bottom-0' : 'h-full flex items-center'}`}>
      {menu && (
        <>
          <div className='bg-white w-3/5 h-screen pl-6 pt-4'>
            <span onClick={() => setMenu(!menu)} className='block bg-icon-close-burger w-5 h-5 bg-no-repeat bg-contain bg-center mb-12' />
            <ul className='flex flex-col gap-y-2 '>
              {user.map(el => <li key={el} className='font-bold '>{el}</li>)}
            </ul>
          </div>
        </>
      )}

      <ul className='menu flex gap-x-3 h-full items-center justify-center'>
        {user.map(el => <li key={el} className='text-gray-500 h-full hover:border-orange-300 hover:border-b-2 cursor-pointer'>{el}</li>)}
      </ul>

    </div>
  )
}

export default Menu
