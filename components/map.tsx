import { useState } from "react";
import GoogleMap from "google-map-react";
import { OpeningTime } from "../configuration/opening-times";
import { siteConfig } from "../configuration/site-config";

const coords = {
  lat: siteConfig.mapLocation.lat,
  lng: siteConfig.mapLocation.lng,
};
const MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

const getInfoWindowString = (place: Place, openingTimes: OpeningTime[]) => {
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
    <p class="text-lg">
    ${place.name}
    </p>
      <ul class="list-none p-0 text-base leading-normal">
      ${times}
      </ul>
    </div>`;
};

const handleApiLoaded = (
  map: any,
  maps: {
    Marker: new (arg0: {
      position: { lat: number; lng: number };
      map: any;
    }) => any;
    InfoWindow: new (arg0: { content: string }) => any;
  },
  places: Place[],
  openingTimes: OpeningTime[]
) => {
  const markers: any[] = [];
  const infowindows: any[] = [];

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

interface Place {
  name: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
}

export default function Map({ openingTimes }: MapProps) {
  const [state, setState] = useState<{ places: Place[] }>({
    places: [
      {
        name: siteConfig.businessName,
        geometry: {
          location: {
            lat: siteConfig.mapLocation.lat,
            lng: siteConfig.mapLocation.lng,
          },
        },
      },
    ],
  });

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMap
        defaultZoom={14}
        defaultCenter={coords}
        bootstrapURLKeys={{ key: MAPS_KEY }}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) =>
          handleApiLoaded(map, maps, state.places, openingTimes)
        }
      ></GoogleMap>
    </div>
  );
}
