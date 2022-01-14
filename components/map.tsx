import { useContext, useState } from "react";
import GoogleMap from "google-map-react";
import AppContext from "../appContext";
import { OpeningTime } from "../configuration/opening-times";

const coords = { lat: 52.511172, lng: -2.115357 };
const MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

const getInfoWindowString = (place, openingTimes: OpeningTime[]) => {
  const times = openingTimes
    .map((openingTime) => {
      let node = "<li>";
      node = node + `${openingTime.day} ${openingTime.opens}`;
      if (openingTime.opens !== "Closed") {
        node = node + ` - ${openingTime.closes}`;
      }

      return node + "</li>";
    })
    .join("");

  return `
    <div class="p-2">
    <p class="fs-5">
    ${place.name}
    </p>
      <ul class="list-unstyled fs-6 lh-base">
      ${times}
      </ul>
    </div>`;
};

const handleApiLoaded = (map, maps, places, openingTimes: OpeningTime[]) => {
  const markers = [];
  const infowindows = [];

  places.forEach((place) => {
    markers.push(
      new maps.Marker({
        position: {
          lat: place.geometry.location.lat,
          lng: place.geometry.location.lng,
        },
        map,
      })
    );

    infowindows.push(
      new maps.InfoWindow({
        content: getInfoWindowString(place, openingTimes),
      })
    );
  });

  markers.forEach((marker, i) => {
    marker.addListener("click", () => {
      infowindows[i].open(map, marker);
    });
  });
};

interface MapProps {
  openingTimes: OpeningTime[];
}
export default function Map({ openingTimes }: MapProps) {
  const [state, setState] = useState({
    places: [
      {
        name: "Dommestic & Commercial Drains",
        geometry: {
          location: {
            lat: 52.511172,
            lng: -2.115357,
          },
        },
      },
    ],
  });

  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={coords}
      bootstrapURLKeys={{ key: MAPS_KEY }}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) =>
        handleApiLoaded(map, maps, state.places, openingTimes)
      }
    ></GoogleMap>
  );
}
