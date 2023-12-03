import React from "react";
import "./_details.scss";

function Details() {
  return (
    <section id="details">
      <div className="details-container">
        <div className="details-content">
          <div className="details-image">
            <img
              src="https://preview.colorlib.com/theme/woodrox/img/project-details-1.jpg"
              alt=""
            />
          </div>
          <div className="details-text">
            <h1>LAVENDAR AMBIENT COLORLIB</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <div className="details-rating">
              <p>
                Rating
                <div className="stars">
                  :<i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-sharp fa-solid fa-star"></i>
                </div>
              </p>
              <p>
                Client<span>: colorlib</span>
              </p>
              <p>
                Website<span>: colorlib.com</span>
              </p>
              <p>
                Completed<span>: 17 Aug 2018</span>
              </p>
            </div>
          </div>
        </div>
        <div className="details-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit.
          </p>
          <p>
            Voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Details;
