import SideBar from '@client/components/sideBar'
import LieuInformation from '@client/components/LieuInformation'
import { useRouter } from 'next/router'
import Map from '@client/components/Map'
import { useState, useEffect } from 'react'



export default function infoLieu() {
    const router = useRouter();
    const { id } = router.query;

    const [lieu, setLieu] = useState({
        id:0,
        nom: "",
        imagesUrl: [],
        description: "",
        longitude: 0,
        latitude: 0,
        wilaya:"",
        adress:"",
        heureOuverture: "",
        heureFermeture: "",
        joursOuverture:[],
        categorie: [],
        theme: []
      });
  const getLieu = async () => {
      try {
        const result = await fetch(`/api/lieu/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        });
        const body = await result.json();
        setLieu(body.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      getLieu();
    }, []);
  
  return (
    <div>
      <SideBar />
      <Map/>
      <LieuInformation lieu={lieu}/>
    </div>
  )
}