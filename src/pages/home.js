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
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getLieux().then((data) => setLieux(data.data)).then((data) => console.log(data));
    getFiltredLieux().then((data) => setFiltredLieux(data.places)).then((data) => console.log(data));
  }, [url]);
  return (
    <div>
      <HomeNavBar getUrl={setUrl} getFilter={setfilter}></HomeNavBar>
      {filter && <Section2 lieux={Filtredlieux}></Section2>}
      <Section1></Section1>
      <Section2 lieux={lieux}></Section2>
      <SideBar></SideBar>
    </div>
  )
}
