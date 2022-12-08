import { useState } from 'react'
import './css/style.css'

const blendLink =
  'https://booksy.com/en-us/781756_88blendz-studio_barber-shop_37796_salt-lake-city#ba_s=vl_1'

const Nav = ({ currentPage, handlePageChange }) => {
  const [isActive, setIsActive] = useState(false)
  const handleClick = (event) => {
    setIsActive((current) => !current)
  }
  return (
    <>
      <nav className='relative container mx-auto p-6 '>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-20'>
            <div className='hidden space-x-8 duration-500 font-bold lg:flex'>
              <a
                href='#a'
                onClick={() => handlePageChange('Gallery')}
                className='text-[#FDB927] duration-500 hover:text-[#552583]'
              >
                Gallery
              </a>
              <a
                href='#b'
                onClick={() => handlePageChange('Merch')}
                className='text-[#FDB927] duration-500 hover:text-[#552583]'
              >
                Merch
              </a>
              <a
                href='#c'
                onClick={() => handlePageChange('Barbers')}
                className='text-[#FDB927] duration-500 hover:text-[#552583]'
              >
                Barbers
              </a>
            </div>
          </div>

          <div className='hidden items-center space-x-6 font-bold text-grayishViolet lg:flex'>
            <a
              href={blendLink}
              className='px-8 py-3 font-bold bg-[#552583] duration-500 text-white rounded-full hover:brightness-105 hover:text-[#FDB927]'
            >
              Book
            </a>
          </div>
          <div className='mr-6 -mt-40'>
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
          className={
            isActive
              ? 'absolute p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100'
              : 'absolute hidden p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100 '
          }
        >
          <div className='flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm'>
            <a
              href='#b'
              onClick={() => handlePageChange('Cuts')}
              className='w-full text-[#FDB927] text-center border-b-2 border-gray-500 pb-6'
            >
              Cuts
            </a>
            <a
              href='#c'
              onClick={() => handlePageChange('Merch')}
              className='w-full text-center text-[#FDB927] border-b-2 border-gray-500 pb-6'
            >
              Merch
            </a>
            <a
              href='#c'
              onClick={() => handlePageChange('Barbers')}
              className='w-full text-center text-[#FDB927]'
            >
              Barbers
            </a>

            {/* <a
              href='#d'
              className='w-full py-3 text-[#FDB927] border border-gray-500 text-center rounded-full bg-[#552583] hover:brightness-75'
            >
              Login
            </a> */}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
