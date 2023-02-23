import React from "react";
import { BsFillHeartFill } from "react-icons/bs";

const Banner = () => {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + " ..." : string;
  }

  return (
    <section className="banner">
      <div className="banner_title">
        <h1>Film Name</h1>
        <p className="banner_description">
          {truncate(
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at bibendum dui. Mauris aliquet lacus metus, at blandit nisi tinciduntvel. Maecenas tincidunt vestibulum eleifend. Phasellus a ipsum non unc faucibus iaculis. Duis quis vehicula enim, pellentesque consectetur nulla. Aliquam posuere, neque vitae dictum convallis, semelit consectetur ligula, eget dapibus felis quam nec urna.`,
            100
          )}
        </p>
        <div className="banner_buttons">
          <button className="banner_buttons-play">Play</button>
          <button className="banner_buttons-favoris">
            <BsFillHeartFill /> Favoris
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
