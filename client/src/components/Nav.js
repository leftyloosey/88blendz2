import { useState } from 'react'
import blendz from '../images/88blendz.jpeg'
import './css/style.css'

const Nav = () => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = (event) => {
    setIsActive((current) => !current)
  }
  return (
    <>
      <nav className='relative container mx-auto p-6'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-20'>
            <div className='flex items-start w-1/2 h-1/4 invert'>
              <img src={blendz} alt='' />
            </div>

            <div className='hidden space-x-8 duration-500 font-bold lg:flex'>
              <a
                href='#a'
                className='text-[#FDB927] duration-500 hover:text-[#552583]'
              >
                Cuts
              </a>
              <a
                href='#b'
                className='text-[#FDB927] duration-500 hover:text-[#552583]'
              >
                Merch
              </a>
              <a
                href='#c'
                className='text-[#FDB927] duration-500 hover:text-[#552583]'
              >
                About
              </a>
            </div>
          </div>

          <div className='hidden items-center space-x-6 font-bold text-grayishViolet lg:flex'>
            <a
              href='#a'
              className='px-8 py-3 font-bold bg-[#552583] duration-500 text-white rounded-full hover:brightness-105 hover:text-[#FDB927]'
            >
              Book
            </a>
          </div>
          <div className='mr-12'>
            <button
              className={
                isActive
                  ? 'open block hamburger lg:hidden focus:outline-none'
                  : 'block hamburger lg:hidden focus:outline-none'
              }
              onClick={handleClick}
              id='menu-btn'
              type='button'
            >
              <span className='hamburger-top'></span>
              <span className='hamburger-middle'></span>
              <span className='hamburger-bottom'></span>
            </button>
          </div>
        </div>
        <div
          id='menu'
          className='absolute hidden p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100'
        >
          <div className='flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm'>
            <a href='#b' className='w-full text-center'>
              Cuts
            </a>
            <a href='#c' className='w-full text-center'>
              Merch
            </a>

            <a
              href='#d'
              className='w-full py-3 text-[#FDB927] border border-gray-500 text-center rounded-full bg-[#552583] hover:brightness-75'
            >
              Login
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
