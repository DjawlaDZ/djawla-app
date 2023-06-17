import React from 'react'
import Image from 'next/image';
import { useState, useEffect } from 'react'


const Comment = (props) => {
  const comment = props.comment;
  const [user, setuser] = useState();
  const getuser = async () => {
    try {
      const result = await fetch(`/api/users/${comment.utilisateur}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const body = await result.json();
      setuser(body.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getuser();
  }, []);

  return (
    <div className='flex mt-2'>
      <Image src={require("../assets/images/profile_pic.webp")} alt="lieu images" className="w-8 h-8 rounded-full mr-3" />
      <div className='overflow-x-hidden'>
        <div>
          <a className='mr-4'>{user.nom + " " + user.prenom}</a>
          <a className='text-gray'>{comment.date}</a>
        </div>
        <p className="whitespace-normal break-words border-t border-orange border-solid">{comment.contenu}</p>
      </div>
    </div>

  )
}

export default Comment