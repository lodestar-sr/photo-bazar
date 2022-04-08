import React from 'react';
import 'assets/sass/LoadMore.scss';

function LoadMore({ ...props }) {
  return (
    <button
      className="btn load_more"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.loading ? 'Loading...' : 'Load More'}
    </button>
  );
}

export default LoadMore;
