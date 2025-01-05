// import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps'
import React from 'react'
// import React, { useEffect, useRef } from 'react'
// import { AdvancedMarker } from '@googlemaps/marker'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

const HOBART = 'AIzaSyC0zTkwcKzG9r-sF6Xwtj3-WDgwSNDwdZ4'
const id = '298edbd82e7e7d1a'
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

// const TheMap = () => {
//   const mapRef = useRef(null)

//   useEffect(() => {
//     const loader = new Loader({
//       apiKey: HOBART,
//       // libraries: ["places"], // Add any additional libraries you need
//     })

//     loader.importLibrary().then(() => {
//       const google = window.google
//       const map = new google.maps.Map(mapRef.current, {
//         center: { lat: lat, lng: lng }, // Replace with your desired center
//         zoom: 12,
//       })
//     })
//   }, [])

//   return <div ref={mapRef} style={{ height: '400px' }} />
// }

const containerStyle = {
  width: '1600px',
  height: '400px',
}

const center = {
  lat: lat,
  lng: lng,
}

const TheMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: id,
    googleMapsApiKey: HOBART,
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    // const bounds = new window.google.maps.LatLngBounds(center)
    // map.fitBounds(bounds)

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={16}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker position={{ lat, lng }} />

      <></>
    </GoogleMap>
  ) : (
    <></>
  )
}

export default React.memo(TheMap)
// const TheMap = () => {
//   const { isLoaded } = useJsApiLoader({
//     id: id,
//     googleMapsApiKey: HOBART,
//     // libraries: ['marker'],
//   })

//   if (!isLoaded) return <div>Loading...</div>

//   return (
//     <GoogleMap
//       mapContainerStyle={{ height: '400px', width: '100%' }}
//       center={{ lat: lat, lng: lng }}
//       zoom={11}
//     >
//       <Marker
//         position={{ lat: lat, lng: lng }}
//         // Add other props for customization
//       />
//     </GoogleMap>
//   )
// }

// export default TheMap
