import product1 from '../images/image-hero.jpg'
import product2 from '../images/fax.webp'

const pics = [product1, product2, product1]

const Merch = ({ handleClick, isActive }) => {
  console.log(isActive)

  return (
    <div
      onLoad={() => handleClick()}
      className='flex flex-col justify-center p-2 items-center md:flex-wrap '
    >
      <div className='w-3/4 h-auto space-y-3'>
        {pics.map((pic) => (
          <div>
            <img
              src={pic}
              key={pic.indexOf}
              alt=''
              className='gals shadow-lg outline'
            />
            <div className='flex flex-row justify-around text-[#552583] bg-[#FDB927] rounded-full opacity-70'>
              <span>item name</span>
              <span>$ $ $</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Merch
