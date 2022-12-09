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
  const [currentPage, setCurrentPage] = useState('')

  const renderPage = () => {
    if (currentPage === 'Merch') {
      return <Merch />
    }
    if (currentPage === 'Gallery') {
      return <Gallery />
    }
    if (currentPage === 'Barbers') {
      return <Barbers />
    }
    return <Front />
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    // <div>

    <div id='hero' className='flex flex-col'>
      <div className='flex flex-row justify-between'>
        <div className='w-2/5 h-1/5'>
          <Blendz />
        </div>

        <div className=''>
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
      </div>

      <div className=''>{renderPage()}</div>

      {/* <Footer /> */}
    </div>
  )
}

export default App
