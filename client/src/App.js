import { useState } from 'react'
import Blendz from './components/Blendz'
import Front from './components/Front'
import Merch from './components/Merch'
import Gallery from './components/Gallery'
import Barbers from './components/Barbers'
// import Footer from './Footer'
import Nav from './components/Nav'

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

  const handlePageChange = (page) => setCurrentPage(page)

  return (
    // <div>

    <div id='hero' className='flex flex-row'>
      <div className=''>
        <Blendz />
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        <div className='flex flex-col'>{renderPage()}</div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default App
