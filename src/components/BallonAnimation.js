import React, { useState } from "react";
import "./BallonAnimation.css";

function BallonAnimation() {
  const [isInflated, setIsInflated] = useState(false);

  const inflateBalloon = () => {
    setIsInflated(true);
  };

  const unInflateBalloon = () => {
    setIsInflated(false);
  };

  return (
    <>
      <h1 className="text-center">
        <u>Animation of a Baloon</u>
      </h1>

      <div className="App pt-4">
        <div className={`balloon ${isInflated ? "inflated" : ""}`}></div>
        <div>
          <button
            onClick={inflateBalloon}
            className="btn btn-primary btnhandler"
          >
            Inflate Balloon
          </button>
          <button
            onClick={unInflateBalloon}
            className="btn btn-success btnhandler"
          >
            Uninflate Balloon
          </button>
        </div>
      </div>
    </>
  );
}

export default BallonAnimation;
