import React from 'react'
import { FiMapPin } from 'react-icons/fi'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { RiGuideFill } from 'react-icons/ri'
import { useState, useEffect } from 'react'

const Details = (props) => {
  const lieu = props.lieu

  const [guides, setGuides] = useState([]);
  const getGuides = async () => {
    try {
      const result = await fetch(`/api/Disponible/${lieu.wilaya}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const body = await result.json();
      setGuides(body);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getGuides();
  }, []);

  return (
    <div className='mt-3 ml-3'>
      <div className='flex felx-row items-center mb-3'>
        <FiMapPin className='mr-5' />
        <p>{lieu.adress}</p>
      </div>
      <div className='flex felx-row items-center mb-3'>
        <AiOutlineClockCircle className='mr-5' />
        <select>
          {
            lieu.joursOuverture.map((item, index) => (
              <option key={index}>{item + " " + lieu.heureOuverture + "-" + lieu.heureFermeture}</option>
            ))
          }
        </select>
      </div>
      <div className='flex felx-row items-center mb-3'>
        <RiGuideFill className='mr-5' />
        {guides.length > 0 ? <p>guides disponibles</p>
          : <p>guides non disponible</p>
        }
      </div>
      <p className="leading-normal">{lieu.description}</p>
    </div>
  )
}
export default Details