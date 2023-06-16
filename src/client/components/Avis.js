import React from 'react'
import Comment from './Comment'
import UserComment from './UserComment'
import { useState, useEffect } from 'react'


const Avis = (props) => {
  const lieuId = props.lieuId

  const [comments, setComments] = useState([]);
  const getComments = async () => {
    try {
      const result = await fetch(`/api/Comments/${lieu.wilaya}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const body = await result.json();
      setComments(body);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getComments();
  }, []);
  
  return (
    <div className='width-100'>
      <UserComment lieuId={lieuId} />

      {comments.length > 0 ? (
        comments.map((item, index) => (
          <div className="mt-4" key={index}>
            <div className="w-full h-[0.5px] bg-gray"></div>
            <Comment comment={item} />
          </div>
        ))
      ) : (
        <div className="text-center mt-4">Il n'y a aucun commentaire actuellement. Soyez le premier!</div>
      )}

    </div>
  )
}

export default Avis