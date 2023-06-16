import React from 'react'
import Rating from './Rating';
import { useState, useEffect } from 'react';

const GeneralInfo = (props) => {
  const [evaluation, setEvaluation] = useState(0);
  const [nbAvis, setNbAvis] = useState(0);
  const getEvaluation = async () => {
    try {
      const result = await fetch(`/api/Evaluation/${props.lieuId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const body = await result.json();
      setNbAvis(body.data.length)
      const total = body.data.reduce((accumulator, currentValue) => accumulator + currentValue.nbEtoiles, 0);
      setEvaluation(total / nbAvis);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getEvaluation();
  }, []);


  return (
    <div className="flex justify-between mt-8 items-center">
      <div className='flex flex-col'>
        <Rating evaluation={evaluation} />
        <a>{evaluation + " (" + nbAvis + "avis)"}</a>
      </div>
      <div>
        {
          props.lieuTheme.map((item, index) => (
            <div key={index} className='btn-orange ml-2'>{item}</div>
          ))
        }
        {
          props.lieuCategorie.map((item, index) => (
            <div key={index} className='btn-orange ml-2'>{item}</div>
          ))
        }
      </div>
    </div>
  )
}

export default GeneralInfo