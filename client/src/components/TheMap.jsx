import React, { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

const HOBART = 'AIzaSyC0zTkwcKzG9r-sF6Xwtj3-WDgwSNDwdZ4'
const id = '298edbd82e7e7d1a'
const lat = 40.713177524497084
const lng = -111.88789891349388

const TheMap = () => {
  const mapRef = useRef(null)

  useEffect(() => {
    const loader = new Loader({
      apiKey: HOBART,
      version: 'weekly',
    })

    loader.importLibrary('marker').then(() => {
      const google = window.google
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: lat, lng: lng },
        zoom: 12,
        mapId: id,
      })
      const AdvancedMarkerElement = google.maps.marker.AdvancedMarkerElement

      const marker = new AdvancedMarkerElement({
        map,
        position: { lat: lat, lng: lng },
        gmpClickable: true,
      })

      marker.addListener('click', () => {
        window.open(
          'https://www.google.com/maps/dir//2641+S+State+St+Suite+B,+Salt+Lake+City,+UT+84115/@40.7130787,-111.9703319,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x87528bd13941b6e1:0xb1aa90e5f9f8f950!2m2!1d-111.8880075!2d40.7131082?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D',
          '_blank'
        )
        marker.removeEventListener('click', () => {
          window.open(
            'https://www.google.com/maps/dir//2641+S+State+St+Suite+B,+Salt+Lake+City,+UT+84115/@40.7130787,-111.9703319,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x87528bd13941b6e1:0xb1aa90e5f9f8f950!2m2!1d-111.8880075!2d40.7131082?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D',
            '_blank'
          )
        })
      })
    })
  }, [])

  return (
    <div className='mt-4 rounded' ref={mapRef} style={{ height: '400px' }} />
  )
}

// export default React.memo(TheMap)
export default TheMap
