import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt as halfStar } from "@fortawesome/free-solid-svg-icons";

const Rating = (props) => {
  const rating = props.evaluation;

const renderStars = () => {
  const stars = [];
  const roundedRating = Math.round(rating * 10) / 10; // Round the rating to one decimal place

  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      // Full star
      stars.push(<FontAwesomeIcon key={i} icon={solidStar} className="text-orange" />);
    } else if (i === Math.ceil(roundedRating) && roundedRating % 1 !== 0) {
      // Half star
      stars.push(<FontAwesomeIcon key={i} icon={halfStar} className="text-orange" />);
    } else {
      // Empty star
      stars.push(<FontAwesomeIcon key={i} icon={solidStar} className="text-gray" />);
    }
  }

  return stars;
};

return (
  <div className="flex items-center">{renderStars()}</div>
);

}

export default Rating