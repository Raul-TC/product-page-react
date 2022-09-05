import { useEffect, useState } from 'react'
import Menu from './components/Menu'
import MenuCart from './components/MenuCart'

function App () {
  const [isMobile, setIsMobile] = useState(true)
  const [menu, setMenu] = useState(false)
  const [menuCart, setMenuCart] = useState(false)
  const [counter, setCounter] = useState(3)
  useEffect(() => {
    if (window.matchMedia('(max-width:640px)').matches) {
      console.info('Responsive')
      console.info(isMobile)
    } else {
      setIsMobile(false)
    }
  }, [isMobile])

  return (
    <>
      {menu && <Menu menu={menu} setMenu={setMenu} />}
      <header className='bg-slate-50 border-b-2 border-gray-200 '>
        <div className='h-14 flex px-6 items-center justify-between sm:max-w-[1440px] sm:h-[80px] sm:m-auto'>
          <div className='flex items-center justify-center'>
            {isMobile && <div onClick={() => setMenu(!menu)} className='menu-icon bg-icon-hamburger h-[38px] w-4 bg-no-repeat bg-center bg-contain mr-3 ' />}
            <h1 className='text-3xl font-bold m-0 p-0 leading-none mr-12 tracking-tighter'>sneakers</h1>
            {isMobile ? null : <Menu isMobile={isMobile} />}
          </div>
          <div className='flex items-center justify-between h-7 sm:h-11 '>
            <span onClick={() => setMenuCart(!menuCart)} className='bg-icon-cart h-6 w-7 bg-no-repeat bg-contain bg-center mr-5 sm:w-5 sm:h-4' />
            <div className='bg-user h-6 w-6 bg-no-repeat bg-center bg-cover sm:h-9 sm:w-9' />
            {menuCart && <MenuCart counter={counter} setCounter={setCounter} />}
          </div>
        </div>
      </header>
    </>
  )
}

export default App
