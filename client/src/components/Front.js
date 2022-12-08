import './css/style.css'
// import QRCode from 'qrcode'

const blendLink =
  'https://booksy.com/en-us/781756_88blendz-studio_barber-shop_37796_salt-lake-city#ba_s=vl_1'

const Front = () => {
  //   QRCode.toDataURL('https://eighty8blendz.herokuapp.com/', (err, url) => {
  //     console.log(url)
  //   })

  return (
    <div>
      <section className='sm:rounded-md md:rounded-md lg:rounded-lg'>
        <div className='container flex flex-col-reverse mx-auto p-6 lg:flex-row'>
          <div className='flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52'>
            <h4 className='text-4xl text-white font-bold text-center lg:text-6xl lg:max-w-md lg:text-left'>
              88Blendz Studio
            </h4>
            <div className='mx-auto lg:mx-0'>
              <a
                href={blendLink}
                className='py-5 px-10 text-2xl duration-500 font-bold text-white bg-[#552583] rounded-full lg:py-4 hover:brightness-105 hover:text-[#FDB927]'
              >
                Book Appointment
              </a>
            </div>
          </div>

          <div className='mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2'></div>
        </div>
      </section>
    </div>
  )
}

export default Front
