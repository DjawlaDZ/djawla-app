import React from 'react';
import Map, { Marker, NavigationControl, Popup } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';



function MapComponent(props) {
  const Lieux = props.Lieux
  /*const map_key = process.env.API_KEY;*/
  const [selectedMarker, setSelectedMarker] = useState(null);
  const router = useRouter();


  const handleMarkerClick = (item) => {
    setSelectedMarker(item);
    router.push(`/Carte/${item._id}`);
  };


  return (
    <div className="map">
      <Map
        mapLib={maplibregl}
        initialViewState={{
          longitude: 3.62662018,
          latitude: 36.2125578,
          zoom: 6
        }}
        style={{ width: "100%", height: "100vh" }}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=ElRGCPDDj3H3oryHkMnR"
      >
        <NavigationControl position="top-right" />
        {Lieux.length > 0 ? (
          Lieux.map((item, index) => (
            <div key={index} >
              <Marker
                longitude={item.longitude}
                latitude={item.latitude}
                color={"red"}
                style={{ cursor: 'pointer' }}
                onClick={() => handleMarkerClick(item)}
              >
                <div className={` ${selectedMarker === item ? 'clicked-marker' : ''}`}
                >
                  {selectedMarker === item ? (
                    <FaMapMarkerAlt color="#C81912" size={30} className='shadow-lg' />
                  ) : (
                    <FaMapMarkerAlt color="#F64B3C" size={30} className='shadow-lg' />
                  )}
                </div>
              </Marker>
            </div>
          ))
        ) : (
          <div></div>
        )}
      </Map>
    </div>
  );
}

export default MapComponent;
