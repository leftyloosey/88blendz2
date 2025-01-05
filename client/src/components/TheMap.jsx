import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps'
import React, { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

const HOBART = 'AIzaSyC0zTkwcKzG9r-sF6Xwtj3-WDgwSNDwdZ4'

const lat = 40.713177524497084
const lng = -111.88789891349388

// const TheMap = () => (
//   <APIProvider apiKey={HOBART}>
//     <Map
//       mapId={'298edbd82e7e7d1a'}
//       className='mt-12 rounded h-96 w-full'
//       zoom={16}
//       center={{ lat, lng }}
//       gestureHandling={'greedy'}
//       disableDefaultUI={true}
//     >
//       <AdvancedMarker position={{ lat, lng }} />
//     </Map>
//   </APIProvider>
// )

const TheMap = () => {
  const mapRef = useRef(null)

  useEffect(() => {
    const loader = new Loader({
      apiKey: HOBART, // Replace with your actual API key
      // libraries: ["places"], // Add any additional libraries you need
    })

    loader.load().then(() => {
      const google = window.google
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: lat, lng: lng }, // Replace with your desired center
        zoom: 12,
      })
    })
  }, [])

  return <div ref={mapRef} style={{ height: '400px' }} />
}

export default TheMap
