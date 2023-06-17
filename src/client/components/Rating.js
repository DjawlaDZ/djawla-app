import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt as halfStar } from "@fortawesome/free-solid-svg-icons";

const Rating = (props) => {
  const rating = props.evaluation;
  return (
    <div className="flex items-center">
      {[...Array(Math.floor(rating))].map((_, index) => (
        <FontAwesomeIcon key={index} icon={solidStar} className="text-orange" />
      ))}
      {rating % 1 !== 0 && (
        <FontAwesomeIcon icon={halfStar} className="text-orange" />
      )}
      {[...Array(5 - Math.ceil(rating))].map((_, index) => (
        <FontAwesomeIcon key={index} icon={solidStar} className="text-gray" />
      ))}
    </div>
  )
}

export default Rating