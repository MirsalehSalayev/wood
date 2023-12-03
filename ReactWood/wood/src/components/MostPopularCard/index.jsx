import React from 'react';
import './_mostCard.scss'

function MostPopularCard({ title, newtitle, img }) {
  return (
    <div>
      <div className="mostPopularCard">
        <div className="mostPopularCardImg">
          <img src={img} alt="sofa" />
        </div>
        <div className="mostPopularCardText">
          <h3>{title}</h3>

          <p>{newtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default MostPopularCard;
