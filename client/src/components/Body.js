import './css/style.css'
// import QRCode from 'qrcode'

const blendLink =
  'https://booksy.com/en-us/781756_88blendz-studio_barber-shop_37796_salt-lake-city#ba_s=vl_1'

const Body = () => {
  //   const qrCode = QRCode.toDataURL(blendLink, (err, url) => {
  //     console.log(url)
  //   })

  return (
    <div>
      <section id='hero' className='rounded-[200px]'>
        <div className='container flex flex-col-reverse mx-auto p-6 lg:flex-row'>
          <div className='flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52'>
            <h4 className='text-4xl text-white font-bold text-center lg:text-6xl lg:max-w-md lg:text-left'>
              A barbershop in a place you wouldn't expect.
            </h4>
            <img src={qrCode} alt='' />
            <div className='mx-auto lg:mx-0'>
              <a
                href={blendLink}
                className='py-5 px-10 text-2xl duration-500 font-bold text-white bg-[#552583] rounded-full lg:py-4 hover:brightness-105 hover:text-[#FDB927]'
              >
                Book
              </a>
            </div>
          </div>

          <div className='mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2'>
            <img src='shortly.png' alt='' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Body
