import React, { useState } from 'react';

const BASE_URL = "https://image.tmdb.org/t/p/w1280/"

export default function Movie({title, poster_path,vote_average,overview}) {


  const t={display:'block'};
  const f={display:'none'};

  const [tf, setTf] = useState(false);
  const handleMouseOut = () => {
    setTf(false);
  };

  const handleMouseOver = () => {
    setTf(true);
  };


 return (
      <div className='movie-container' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <div className='more' style={tf?t:f}>
              <h4>{title}</h4>
              <span>{overview}</span>
        </div>
        <img src={BASE_URL+ poster_path}/>
        <div className='movie-info'>
          <h4>{title}</h4>
          <span>{vote_average}</span>
            
        </div>
      </div>
  )
}