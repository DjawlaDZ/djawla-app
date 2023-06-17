import React from 'react'
import MapComponent from './MapComponent';
import { useState , useEffect } from 'react';


const Map = () => {
    const [Lieux, setLieux] = useState([]);
      const getLieux = async () => {
          try {
            const result = await fetch('/api/lieux', {
              method: "GET",
              headers: {
                "Content-Type": "application/json"
              },
            });
            const body = await result.json();
            setLieux(body);
          } catch (error) {
            console.error(error);
          }
        };
      
        useEffect(() => {
          getLieux();
        }, []);
        
      return (
          <MapComponent Lieux={Lieux}/>
      )
}

export default Map