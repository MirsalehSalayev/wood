import React from "react";
import "./_gifs.scss"

const Gifs = () => {
  return (
    <section id="gifs">
      <div className="gifsContainer">
        <img
          src="https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-1.png"
          alt=""
        />
        <img
          src="https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-2.png"
          alt=""
        />
        <img
          src="https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-3.png"
          alt=""
        />
        <img
          src="https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-4.png"
          alt=""
          style={{ width: "155px" }}
        />
        <img
          src="https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-5.png"
          alt=""
        />
      </div>
    </section>
  );
}

export default Gifs;
