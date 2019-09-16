import React, { useState } from "react"
import { renderToString } from "react-dom/server"
import { Separator, Stack, Text } from "office-ui-fabric-react"
import GoogleMap from "google-map-react"

const coords = { lat: 52.513115, lng: -2.115432 }

const getInfoWindowString = place => {
  return renderToString(
    <Stack horizontalAlign="center" tokens={{ childrenGap: 6, padding: 20 }}>
      <Stack.Item>
        <Text as="h2" variant="large">
          {place.name}
        </Text>
        <Separator />
        <Text as="p" variant="medium">
          Monday 9:00 am - 6:00 pm
          <br />
          Tuesday 9:00 am - 6:00 pm
          <br />
          Wednesday 9:00 am - 5:00 pm
          <br />
          Thursday 9:00 am - 6:00 pm
          <br />
          Friday 9:00 am - 7:00 pm
          <br />
          Saturday 9:00 am - 5:00 pm
          <br />
          Sunday 9:00 am - 2:00 pm
        </Text>
      </Stack.Item>
    </Stack>
  )
}

const handleApiLoaded = (map, maps, places) => {
  const markers = []
  const infowindows = []

  places.forEach(place => {
    markers.push(
      new maps.Marker({
        position: {
          lat: place.geometry.location.lat,
          lng: place.geometry.location.lng,
        },
        map,
      })
    )

    infowindows.push(
      new maps.InfoWindow({
        content: getInfoWindowString(place),
      })
    )
  })

  markers.forEach((marker, i) => {
    marker.addListener("click", () => {
      infowindows[i].open(map, marker)
    })
  })
}

const MapContainer = props => {
  const [state] = useState({
    places: [
      {
        name: "Domestic & Commercial Drain Services",
        description: "desc",
        geometry: {
          location: {
            lat: coords.lat,
            lng: coords.lng,
          },
        },
      },
    ],
  })

  console.log("state: ", state)

  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={coords}
      bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAPS_API_KEY }}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) =>
        handleApiLoaded(map, maps, state.places)
      }
    />
  )
}

export default MapContainer
