import React from 'react';
import Image from './Image';
import 'assets/sass/Images.scss';

function Images({ images, loading }) {
  return (
    <div className="images">
      {!loading && images.length === 0 ? (
        <div className="images_empty">
          <h4>no images found</h4>
        </div>
      ) : (
        images.map((image, index) => <Image key={index} image={image} />)
      )}
    </div>
  );
}

export default Images;
