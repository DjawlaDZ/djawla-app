import React from 'react'
import Rating from './Rating';
import { useState, useEffect } from 'react';

const GeneralInfo = (props) => {
  const [evaluation, setEvaluation] = useState(0);
  const lieuId = props.lieuId;
  const [nbAvis, setNbAvis] = useState(0);
  const getEvaluation = async () => {
    try {
      if (lieuId) {
      const result = await fetch(`/api/evaluation/${lieuId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const body = await result.json();
      if (body.success === true) {
        if(body.place.length >0){
          setNbAvis(body.place.length)
          var total = 0
          {body.place.map((item,index)=>
            total = total+ item.nbEtoiles)}
          setEvaluation(Math.round((total / body.place.length)*10)/10);
        }else{
          setEvaluation(0);
          setNbAvis(0);
        }    
      }
      else{
        setEvaluation(0);
        setNbAvis(0);
      }}
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getEvaluation();
  }, [lieuId]);


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