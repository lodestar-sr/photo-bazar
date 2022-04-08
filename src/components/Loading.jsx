import React from 'react';
import image from 'assets/img/loading.svg';
import 'assets/sass/Loading.scss';

function Loading({ fullPage }) {
  return (
    <div className={`loading ${fullPage ? 'full_page' : ''}`}>
      <img src={image} alt="" />
    </div>
  );
}

export default Loading;
