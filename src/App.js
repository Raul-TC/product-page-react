import { useEffect, useState } from 'react'
import Button from './components/Button'
import CompanyName from './components/CompanyName'
import { Counter } from './components/Counter'
import Menu from './components/Menu'
import MenuCart from './components/MenuCart'
import Price from './components/Price'
import ProductDescription from './components/ProductDescription'
import ProductName from './components/ProductName'
import Slider from './components/Slider'

function App () {
  const [isMobile, setIsMobile] = useState(true)
  const [menu, setMenu] = useState(false)
  const [menuCart, setMenuCart] = useState(false)
  const [counter, setCounter] = useState(0)
  const [quantity, setQuantity] = useState(counter)
  useEffect(() => {
    if (window.matchMedia('(max-width:1024px)').matches) {
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
          </div>
        </div>
      </header>
      <main className='max-w-[100%] w-full h-[80vh] m-auto sm:relative'>
        {menuCart && <MenuCart counter={quantity} setCounter={setCounter} setQuantity={setQuantity} setMenuCart={setMenuCart} />}
        <Slider />
        <div className='w-[90%] m-auto'>
          <CompanyName />
          <ProductName />
          <ProductDescription />
          <Price />
          <Counter counter={counter} setCounter={setCounter} />
          <Button counter={counter} setQuantity={setQuantity} setMenuCart={setMenuCart} />
        </div>
      </main>
    </>
  )
}

export default App
