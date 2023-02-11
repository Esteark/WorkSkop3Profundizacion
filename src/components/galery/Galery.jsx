import React from "react";
import "./galery.scss";

const Galery = () => {
  return (
    <div>
      <section className="section2">
        <div className="section2txt">
          <h1>OUR CREATIONS</h1>
          <button class="button1">SEE ALL</button>
        </div>
        <div>
          <figure className="card1">
            <h1 className="textCard">DEEP EARTH</h1>
          </figure>

          <figure class="card2">
            <h1 className="textCard">NIGHT ARCADE</h1>
          </figure>

          <figure class="card3">
            <h1 className="textCard">SOCCER TEAM VR</h1>
          </figure>

          <figure class="card4">
            <h1 className="textCard">THE GRID</h1>
          </figure>

          <figure class="card5">
            <h1 className="textCard">FROM UP ABOVE VR</h1>
          </figure>

          <figure class="card6">
            <h1 className="textCard">POCKET BOREALIS</h1>
          </figure>

          <figure class="card7">
            <h1 className="textCard">THE CURIOSITY</h1>
          </figure>

          <figure class="card8">
            <h1 className="textCard">MAKE IT FISHEYE</h1>
          </figure>
        </div>

        <button class="button2">SEE ALL</button>
      </section>
    </div>
  );
};

export default Galery;
