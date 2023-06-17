import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa';
import { AiOutlineFile } from 'react-icons/ai';
import { useState, useEffect } from 'react'



const Evenement = (props) => {
  var lieuId = 0;
  if (props.lieuId) {
    lieuId = props.lieuId;
  }

  const [evenements, setEvenements] = useState([]);
  const getEvenements = async () => {
    try {
      if (lieuId != 0) {
        const result = await fetch(`/api/evenements/${lieuId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        });
        const body = await result.json();
        setEvenements(body.Evenements);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getEvenements();
  }, [lieuId]);

  return (
    evenements.length > 0 ? (
      evenements.map((item, index) => (
        <div className="w-[90%] bg-[#F8F8F8] p-4 pl-10 rounded-lg bg-white shadow-lg m-auto mt-4" key={index}>
          <h1 className="text-[#1F2A3E] font-bold">{item.nom}</h1>
          <div className="flex items-center mt-2">
            <FaCalendarAlt className="text-orange mr-2" />
            <a>{item.ouverture + " au " + item.fermeture}</a>
          </div>
          <div className="flex items-center mt-2">
            <FaDollarSign className="text-orange mr-2" />
            <a>{item.frais}</a>
          </div>
          <div className="flex items-center mt-2">
            <AiOutlineFile className="text-orange mr-2" />
            <a>{item.description}</a>
          </div>
        </div>
      ))
    ) : (
      <div className="text-center mt-4">Il n'y a aucun evenement actuellement.</div>
    )
  );
}

export default Evenement