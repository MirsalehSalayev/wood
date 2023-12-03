import React from 'react';
import './_most.scss'

import MostPopularCard from '../MostPopularCard/index';


function MostPopular() {
  return (
    <div className="mostPopular">
      <div className="mostPopularHead">
        <h2>MOST POPULAR FURNITURES</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
      </div>

      <div className="mostPopularHeadCArds">
        <MostPopularCard
          img={
            "https://preview.colorlib.com/theme/woodrox/img/furniture/furniture-1.jpg"
          }
          title={<h5>GREEN BUTTER SOFA</h5>}
          newtitle={
            <p>
              Sony laptops are among the most well known laptops on today’s
              market. Sony is a name that.
            </p>
          }
        >
          {" "}
        </MostPopularCard>

        <MostPopularCard
          img={
            "https://preview.colorlib.com/theme/woodrox/img/furniture/furniture-2.jpg"
          }
          title={<h5>GREEN BUTTER SOFA</h5>}
          newtitle={
            <p>
              Sony laptops are among the most well known laptops on today’s
              market. Sony is a name that.
            </p>
          }
        >
          {" "}
        </MostPopularCard>

        <MostPopularCard
          img={
            "https://preview.colorlib.com/theme/woodrox/img/furniture/furniture-3.jpg"
          }
          title={<h5>GREEN BUTTER SOFA</h5>}
          newtitle={
            <p>
              Sony laptops are among the most well known laptops on today’s
              market. Sony is a name that.
            </p>
          }
        >
          {" "}
        </MostPopularCard>
      </div>
    </div>
  );
}

export default MostPopular;
