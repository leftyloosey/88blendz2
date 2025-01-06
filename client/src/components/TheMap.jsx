import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps'
import React, { useEffect, useRef } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { Loader } from '@googlemaps/js-api-loader'

const HOBART = 'AIzaSyC0zTkwcKzG9r-sF6Xwtj3-WDgwSNDwdZ4'
const id = '298edbd82e7e7d1a'
const lat = 40.713177524497084
const lng = -111.88789891349388

const containerStyle = {
  width: '1600px',
  height: '400px',
}

const center = {
  lat: lat,
  lng: lng,
}
const TheMap = () => {
  return (
    <APIProvider apiKey={HOBART}>
      <Map
        mapId={id}
        className='mt-4 rounded h-96 w-full'
        zoom={15}
        center={{ lat, lng }}
        // gestureHandling={'cooperative'}
        // disableDefaultUI={true}
      >
        <AdvancedMarker
          // key={}
          position={{ lat, lng }}
          gmpClickable={true}
          onClick={() => {
            window.open(
              'https://www.google.com/maps/dir//2641+S+State+St+Suite+B,+Salt+Lake+City,+UT+84115/@40.7130787,-111.9703319,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x87528bd13941b6e1:0xb1aa90e5f9f8f950!2m2!1d-111.8880075!2d40.7131082?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D',
              '_blank'
            )
          }}
        />
      </Map>
    </APIProvider>
  )
}
export default TheMap

// const TheMap = () => {
//   const mapRef = useRef(null)
//   const markerRef = useRef(null)

//   useEffect(() => {
//     const loader = new Loader({
//       apiKey: HOBART,
//       version: 'weekly',
//     })

//     loader.importLibrary('marker').then(() => {
//       const google = window.google
//       const map = new google.maps.Map(mapRef.current, {
//         center: { lat: lat, lng: lng }, // Replace with your desired center
//         zoom: 12,
//         mapId: id,
//       })
//       const AdvancedMarkerElement = google.maps.marker.AdvancedMarkerElement
//       // const { AdvancedMarkerElement } = google.maps.importLibrary('marker')

//       const marker = new AdvancedMarkerElement({
//         // id: id,
//         map,
//         position: { lat: lat, lng: lng },
//         gmpClickable: true
//       })
//     })
//   }, [])

//   return <div ref={mapRef} style={{ height: '400px' }} />
// }

// const TheMap = () => {
//   const { isLoaded } = useJsApiLoader({
//     id: id,
//     googleMapsApiKey: HOBART,
//   })

//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     // const bounds = new window.google.maps.LatLngBounds(center)
//     // map.fitBounds(bounds)

//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={16}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//     >
//       {/* Child components, such as markers, info windows, etc. */}
//       <Marker position={{ lat, lng }} />

//       <></>
//     </GoogleMap>
//   ) : (
//     <></>
//   )
// }

// export default React.memo(TheMap)
