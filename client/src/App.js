import { useState } from 'react'
import Blendz from './components/Blendz'
import Front from './components/Front'
import Merch from './components/Merch'
import Gallery from './components/Gallery'
import Barbers from './components/Barbers'
// import Footer from './Footer'
import Nav from './components/Nav'
import './components/css/style.css'

const App = () => {
  const [isActive, setIsActive] = useState(false)
  const handleClick = (event) => {
    setIsActive((current) => !current)
  }
  const [currentPage, setCurrentPage] = useState('')

  const renderPage = () => {
    if (currentPage === 'Merch') {
      return <Merch isActive={isActive} handleClick={handleClick} />
    }
    if (currentPage === 'Gallery') {
      return <Gallery isActive={isActive} handleClick={handleClick} />
    }
    if (currentPage === 'Barbers') {
      return <Barbers isActive={isActive} handleClick={handleClick} />
    }
    return <Front />
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    // <div>

    <div id='hero' className='flex flex-col'>
      <div className='z-100 fixed top-0 flex flex-row justify-between'>
        <div className='w-2/5 h-1/5'>
          <Blendz />
        </div>

        <div className=''>
          <Nav
            isActive={isActive}
            handleClick={handleClick}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>

      <div className='flex mt-20 pt-20 mb-100'>{renderPage()}</div>

      {/* <Footer /> */}
    </div>
  )
}

export default App
