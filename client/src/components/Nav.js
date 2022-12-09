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
      {() => handleClick}
      {/* <nav className='relative container mx-auto p-6 '> */}
      <nav className=''>
        <div className=''>
          {/* <div className='flex items-center justify-between'> */}
          <div className='sm:flex flex-row p-5'>
            {/* <div className='flex items-center space-x-20'> */}
            {/* <div className='space-x-8 duration-500 font-bold lg:flex'> */}
            <div className='hidden md:block space-x-2 font-bold pr-2'>
              <a
                href='#a'
                onClick={() => handlePageChange('Gallery')}
                className='text-[#552583] duration-500 hover:text-[#FDB927]'
              >
                Gallery
              </a>
              <a
                href='#b'
                onClick={() => handlePageChange('Merch')}
                className='text-[#552583] duration-500 hover:text-[#FDB927]'
              >
                Merch
              </a>
              <a
                href='#c'
                onClick={() => handlePageChange('Barbers')}
                className='text-[#552583] duration-500 hover:text-[#FDB927]'
              >
                Barbers
              </a>
            </div>
            <div className='flex flex-row space-x-3'>
              <a
                href={blendLink}
                className='items-center px-3 font-bold text-[#552583] duration-500 bg-[#FDB927] rounded-full hover:brightness-105 hover:text-[#FDB927]'
                // className='px-6 pt-4 mt-24 items-center font-bold bg-[#552583] duration-500 text-white rounded-full hover:brightness-105 hover:text-[#FDB927] sm:visible'
              >
                Book
              </a>
              {/* <div className='flex flex-row font-bold text-grayishViolet'> */}
              <div className='pt-0.5 visible sm:invisible'>
                <div id='3 lines' className=''>
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

                {/* <div id='3 lines' className='absolute top-6 right-8 md:invisible'> */}
              </div>
            </div>
          </div>
        </div>
        <div
          id='menu'
          onMouseLeave={handleClick}
          onTouchCancel={handleClick}
          className={
            isActive
              ? 'absolute p-6 rounded-lg bg-darkViolet left-6 right-6 top-15 z-100'
              : 'absolute hidden p-6 rounded-lg bg-darkViolet left-6 right-6 top-15 z-100 '
          }
        >
          <div className='flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm '>
            <a
              href={blendLink}
              className='w-full text-[#FDB927] text-center border-b-2 border-gray-500 pb-3 bg-[#552583] rounded-full pt-3'
            >
              Book Appointment
            </a>
            <a
              href='#b'
              // onClick={() => handlePageChange('Cuts')}
              onClick={() => handlePageChange('Gallery')}
              // className='w-full text-[#FDB927] text-center border-b-2 border-gray-500 pb-6'
              className='w-full  text-center border-b-2 border-gray-500 pb-6'
            >
              Gallery
            </a>
            <a
              href='#c'
              onClick={() => handlePageChange('Merch')}
              on
              className='w-full text-center  border-b-2 border-gray-500 pb-6'
            >
              Merch
            </a>
            <a
              href='#c'
              onClick={() => handlePageChange('Barbers')}
              className='w-full text-center '
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
