import insta from '../images/icon-instagram.svg'
import pinterest from '../images/icon-pinterest.svg'
import twitter from '../images/icon-twitter.svg'
import './css/style.css'

const Footer = () => {
  return (
    <footer className='mt-6 flex justify-center'>
      <div className='flex space-x-6'>
        <a href='#a'>
          <img src={insta} alt='' className='ficon' />
        </a>
        <a href='#b'>
          <img src={pinterest} alt='' className='ficon' />
        </a>
        <a href='#c'>
          <img src={twitter} alt='' className='ficon' />
        </a>
      </div>
    </footer>
  )
}

export default Footer
