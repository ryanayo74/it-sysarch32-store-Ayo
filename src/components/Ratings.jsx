import React from "react";
import Star from "../assets/star.png";

const StarRating = ({ rating }) => {
  // Generate an array of star elements based on the rating
  const starElements = Array.from({ length: rating }, (_, index) => (
    <img key={index} src={Star} alt="Star" />
  ));

  return <div>{starElements}</div>;
};

export default StarRating;