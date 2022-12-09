import pic1 from '../images/gallery/img1.jpeg'
import pic2 from '../images/gallery/img2.jpeg'
import pic3 from '../images/gallery/img4.jpeg'
import pic4 from '../images/gallery/img3.jpeg'
import pic6 from '../images/gallery/img6.jpeg'
import pic7 from '../images/gallery/img7.jpeg'
import pic8 from '../images/gallery/img8.jpeg'

// import Photo from './Photo'

const pics = [pic1, pic2, pic3, pic4, pic6, pic7, pic8]

const Gallery = () => {
  return (
    <div className='flex flex-col justify-center p-2 items-center md:flex-wrap '>
      <div className='w-3/4 h-auto space-y-3'>
        {pics.map((pic) => (
          <img
            src={pic}
            key={pic.indexOf}
            alt=''
            className='gals shadow-lg outline'
          />
        ))}
      </div>
    </div>
  )
}

export default Gallery
