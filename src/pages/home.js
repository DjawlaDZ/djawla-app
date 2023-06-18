import { useEffect, useState } from "react";
import HomeNavBar from "../client/components/homeNavBar";
import Section1 from "../client/components/section1";
import Section2 from "../client/components/section2";
import SideBar from "../client/components/sideBar";

export default function Home() {
  const [lieux, setLieux] = useState([]);
  const [Filtredlieux, setFiltredLieux] = useState([]);
  const [url, seturl] = useState('api/Filtering');
  const [filter, setFilter] = useState(false);
  const setfilter = (data) => {
    // Process the data received from the child component
    setFilter(data);
  };
  const setUrl = (data) => {
    seturl(data);
  };
  const getLieux = async () => {
    try {
      const response = await fetch('/api/lieux', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const getFiltredLieux = async () => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      throw error; // Re-throw the error to propagate it to the calling code
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const lieuxData = await getLieux();
        setLieux(lieuxData.data);
        console.log(lieuxData);
  
        const filtredLieuxData = await getFiltredLieux();
        setFiltredLieux(filtredLieuxData.places);
        console.log(filtredLieuxData);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, [url]);
  return (
    <div>
      <HomeNavBar getUrl={setUrl} getFilter={setfilter}></HomeNavBar>
      {filter && <Section2 lieux={Filtredlieux} link={"/home"}></Section2>}
      <Section1></Section1>
      <Section2 lieux={lieux} link={"/home"}></Section2>
      <SideBar></SideBar>
    </div>
  )
}
