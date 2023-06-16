import React from 'react'
import { useState } from 'react'
import Details from './Details'
import Avis from './Avis'
import Evenement from './Evenement'

function DesplayedInfo (props) {
  const lieu= props.lieu;
  const infoList = ["Details" , "Avis" , "Evenements"];
  const [userInfoCHoice,setUserInfoCHoice] = useState('Details');
  return (
    <div className='mt-5'>
      <ul className='flex cursor-pointer justify-around items-start border-b-1.5 border-gray'>
        {infoList.map((item, index) =>
          <li key={index}
            className={`pl-3 pr-3 hover:border-orange hover:border-b-1.5 hover:text-orange ${item === userInfoCHoice ? "border-b-1.5 border-orange text-orange pb-4" : "pb-4"}`}
            onClick={() => { setUserInfoCHoice(item) }}>{item}
          </li>
        )}
      </ul>
      {userInfoCHoice==="Details" ? <Details lieu={lieu}/> : userInfoCHoice==="Avis" ? <Avis lieuId={lieu.id}/> : <Evenement/> }
    </div>
  )
}

export default DesplayedInfo