import React, { useState } from 'react';
import ImagesSlider from './ImagesSlider';
import GeneralInfo from './GeneralInfo';
import DesplayedInfo from './DesplayedInfo';
import { GrClose } from 'react-icons/gr'
import { useRouter } from 'next/router';

const LieuInformation = (props) => {
  var lieu = {
    id: 0,
    nom: "",
    imagesUrl: [],
    description: "",
    longitude: 0,
    latitude: 0,
    wilaya: "",
    heureOuverture: "",
    heureFermeture: "",
    joursOuverture: [],
    categorie: [],
    theme: []
  };
  if (props.lieu) {
    lieu = props.lieu;
  }

  const router = useRouter();

  const toggleWindow = () => {
    router.push(`/Carte`);
  };

  return (
    <div >
      <div className={`fixed top-[4vh] left-20 transition-transform duration-400 ease-linear overflow-y-auto
        custom-scrollbar p-9 w-[40%] h-[92vh] bg-primary_bg z-50 shadow-lg rounded-[10px] `}>
        <h1 className="font-poppins font-bold text-3xl pl-1">{lieu.nom}</h1>
        <ImagesSlider lieuImages={lieu.imagesUrl} />
        <GeneralInfo lieuId={lieu._id} lieuTheme={lieu.theme} lieuCategorie={lieu.categorie} />
        <DesplayedInfo lieu={lieu} />
        <button onClick={toggleWindow} className="absolute top-5 right-5 text-gray-500 hover:text-gray-700">
          <GrClose />
        </button>
      </div>
    </div>
  );
};

export default LieuInformation;
