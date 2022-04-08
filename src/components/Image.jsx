import React from 'react';
import { Link } from 'react-router-dom';

function Image({ image }) {
  return (
    <Link to={`/${image.id}`}>
      <img className="img" src={image.webformatURL} alt="" />
    </Link>
  );
}

export default Image;
