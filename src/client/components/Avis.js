import React from 'react'
import Comment from './Comment'
import UserComment from './UserComment'
import { useState, useEffect } from 'react'


const Avis = (props) => {
  var lieuId = 0;
  if (props.lieuId) {
    lieuId = props.lieuId;
  }

  const [comments, setComments] = useState([]);
  const getComments = async () => {
    try {
      if (lieuId != 0) {
        const result = await fetch(`/api/comments/${lieuId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        });
        const body = await result.json();
        setComments(body.Comments);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getComments();
  }, [lieuId]);

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