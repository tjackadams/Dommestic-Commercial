import { useState } from "react";
import GoogleMap from "google-map-react";
import { OpeningTime } from "../configuration/opening-times";
import { siteConfig } from "../configuration/site-config";
import { MapPinIcon, XMarkIcon } from "@heroicons/react/24/outline";

const coords = {
  lat: siteConfig.mapLocation.lat,
  lng: siteConfig.mapLocation.lng,
};
const MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

interface Place {
  name: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
}

const Marker = ({ name, onClick }: { lat: number; lng: number; name: string; onClick: () => void }) => (
  <div 
    onClick={onClick} 
    className="relative flex flex-col items-center cursor-pointer group"
    style={{ transform: 'translate(-50%, -100%)' }}
  >
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-(--primary) text-white shadow-lg ring-2 ring-white transition-transform group-hover:scale-110">
      <MapPinIcon className="h-6 w-6" />
    </div>
    <div className="absolute top-0 mt-1 rounded bg-neutral-900 px-2 py-1 text-[10px] font-bold text-white opacity-0 transition-opacity group-hover:opacity-100 whitespace-nowrap">
      {name}
    </div>
  </div>
);

const InfoWindow = ({ place, openingTimes, onClose }: { lat: number; lng: number; place: Place; openingTimes: OpeningTime[]; onClose: () => void }) => (
  <div 
    className="absolute z-10 bg-white p-4 rounded-xl shadow-2xl border border-neutral-100 min-w-64 text-neutral-800 animate-in fade-in zoom-in duration-200"
    style={{ transform: 'translate(-50%, calc(-100% - 50px))' }}
  >
    <button 
      onClick={onClose}
      className="absolute top-2 right-2 p-1 text-neutral-400 hover:text-neutral-600 rounded-full hover:bg-neutral-100"
    >
      <XMarkIcon className="h-4 w-4" />
    </button>
    <p className="text-lg font-bold mb-3 text-(--primary) pr-6">{place.name}</p>
    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Opening Hours</p>
    <ul className="list-none p-0 text-sm space-y-1.5">
      {openingTimes.map((ot) => (
        <li key={ot.day} className="flex justify-between gap-4 border-b border-neutral-50 pb-1 last:border-0 last:pb-0">
          <span className="font-medium text-neutral-500">{ot.day}</span>
          <span className="text-neutral-700 font-semibold">{ot.opens === "Closed" ? "Closed" : `${ot.opens} - ${ot.closes}`}</span>
        </li>
      ))}
    </ul>
    <div className="absolute top-full left-1/2 -mt-px -translate-x-1/2 border-l-10 border-l-transparent border-r-10 border-r-transparent border-t-10 border-t-white"></div>
  </div>
);

interface MapProps {
  openingTimes: OpeningTime[];
}

export default function Map({ openingTimes }: MapProps) {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  
  const places: Place[] = [
    {
      name: siteConfig.businessName,
      geometry: {
        location: {
          lat: siteConfig.mapLocation.lat,
          lng: siteConfig.mapLocation.lng,
        },
      },
    },
  ];

  return (
    <div style={{ height: "100%", width: "100%", position: 'relative' }}>
      <GoogleMap
        defaultZoom={14}
        defaultCenter={coords}
        bootstrapURLKeys={{ key: MAPS_KEY }}
        onClick={() => setSelectedPlace(null)}
      >
        {places.map((place, index) => (
          <Marker
            key={index}
            lat={place.geometry.location.lat}
            lng={place.geometry.location.lng}
            name={place.name}
            onClick={() => setSelectedPlace(place)}
          />
        ))}

        {selectedPlace && (
          <InfoWindow
            lat={selectedPlace.geometry.location.lat}
            lng={selectedPlace.geometry.location.lng}
            place={selectedPlace}
            openingTimes={openingTimes}
            onClose={() => setSelectedPlace(null)}
          />
        )}
      </GoogleMap>
    </div>
  );
}
