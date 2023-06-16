
import React, { useState } from 'react'
const categories = [
  { label: '_', value: '_' },
  { label: 'Monument', value: 'Monument' },
  { label: 'Musée', value: 'Musée' },
  { label: 'Place', value: 'Place' },
];
const themes = [
  { label: '_', value: '_' },
  { label: 'Naturel', value: 'Naturel' },
  { label: 'Histoire', value: 'Histoire' },
];
const wilayas=['_','Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa', 'Biskra', 'Béchar', 'Blida', 'Bouira', 'Tamanrasset', 'Tébessa', 'Tlemcen', 'Tiaret', 'Tizi Ouzou', 'Alger', 'Djelfa', 'Jijel', 'Sétif', 'Saïda', 'Skikda', 'Sidi Bel Abbès', 'Annaba', 'Guelma', 'Constantine', 'Médéa', 'Mostaganem', 'MSila', 'Mascara', 'Ouargla', 'Oran', 'El Bayadh', 'Illizi', 'Bordj Bou Arreridj', 'Boumerdès', 'El Tarf', 'Tindouf', 'Tissemsilt', 'El Oued', 'Khenchela', 'Souk Ahras', 'Tipaza', 'Mila', 'Aïn Defla', 'Naâma', 'Aïn Témouchent', 'Ghardaïa', 'Relizane'];
export default function Filter({getUrl,getfilter}) {
  const [category, setCategory] = useState('_')
  const [theme, setTheme] = useState('_')
  const [wilaya, setWilaya] = useState('_')
  const[fil,setfil]=useState(false);
  return (
    <div className='px-16 z-2000'>
      <div className='xl:container xl:mx-auto flex flex-col items-center text-center py-6 px-3 sm:flex-row sm:justify-between'>
        <div><label>Catégorie :</label>
          <select title='catégorie'
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            {categories.map((option) => {
              return (
                <option>{option.value}</option>
              );
            })}
          </select>
        </div>
        <div>
          <label>Thème :</label>
          <select title='thème'
            value={theme}
            onChange={(event) => setTheme(event.target.value)}
          >
            {themes.map((option) => {
              return (
                <option>{option.value}</option>
              );
            })}</select>
        </div>
        <div>
          <label>Wilaya :</label>
          <select title='Wilaya'
            value={wilaya}
            onChange={(event) => setWilaya(event.target.value)}
            >
              {wilayas.map((option) => {
                return (
                  <option>{option}</option>
                );
              })}</select>
        </div>
        {wilaya!== '_' || category!=='_' || theme!=='_' ? 
        <button className='text-white px-2 bg-[#7DADFE] rounded-xl' onClick={()=>{
          var url="api/Filtering?";
          if(theme!='_')
          url=url+`Theme=${theme}&`;
          if(category!='_')
          url=url+`Categorie=${category}&`;
          if(wilaya!='_')
          url=url+`wilaya=${wilaya}&`;
          getUrl(url);
          setfil(!fil);
          getfilter(fil);
        }}>filtrer</button>:null}
      </div>
    </div>
  )
}

