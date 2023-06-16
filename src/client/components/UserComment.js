import { useState } from 'react';
import React from 'react'
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";


const UserComment = (props) => {
    const lieuId = props.lieuId
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);
    const [isRated, setIsRated] = useState(false);
    const handleStarClick = (starRating) => {
        if (!isRated) {
            setRating(starRating);
            setIsRated(true);
        }

        /*const response = await fetch('/api/evaluation', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ rating , lieuId  }),
          });
      
          if (response.ok) {
            // Rating stored successfully
            console.log('Rating stored in the database');
          } else {
            // Handle error
            console.error('Failed to store rating');
          }*/
    };
    const handleStarHover = (starRating) => {
        if (!isRated) {
            setHoveredRating(starRating);
        }
    };
    const handleStarHoverExit = () => {
        if (!isRated) {
            setHoveredRating(0);
        }
    };


    const [comment, setComment] = useState('');
    const handleCommentSubmit = async () => {
        const response = await fetch('/api/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ comment, lieuId }),
        });

        if (response.ok) {
            // Comment stored successfully
            console.log('Comment stored in the database');
            // Clear the comment input field
            setComment('');
        } else {
            // Handle error
            console.error('Failed to store comment');
        }
    };
    return (
        <div className='flex w-full mt-6 '>
            <Image src={require("../assets/images/profile_pic.webp")} alt="lieu images" className="w-8 h-8 rounded-full mr-3" />
            <div className='flex flex-col flex-grow'>
                <label for="fname">Votre avis:</label>
                <input type="text" id="fname" name="fname" placeholder='Votre commentaire ici'
                    className='rounded-full w-full p-2 mb-2 resize-none shadow-md'
                    onChange={(e) => setComment(e.target.value)} />
                <div className='flex justify-between'>
                    <div>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className={`cursor-pointer ${star <= rating || star <= hoveredRating ? 'text-orange' : 'text-gray'
                                    }`}
                                onClick={() => handleStarClick(star)}
                                onMouseEnter={() => handleStarHover(star)}
                                onMouseLeave={handleStarHoverExit}
                            >
                                <FontAwesomeIcon icon={solidStar} />
                            </span>
                        ))}
                        <p>{isRated && ("Merci!")}</p>
                    </div>
                    <input type="submit" value="Envoyer" className='btn-orange position-right' onClick={handleCommentSubmit} />
                </div>

            </div>

        </div>
    )
}

export default UserComment