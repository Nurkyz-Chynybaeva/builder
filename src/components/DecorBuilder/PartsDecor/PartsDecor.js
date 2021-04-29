import React from "react";
import classes from "./PartsDecor.module.css";
import purpleButterfly from "../../../images/purplebutterfly.png";
import blueButterfly from "../../../images/bluebutterfly.jpg";
import pinkButterfly from "../../../images/pinkButterfly.png";

const PartsDecor = ({ type, fixed }) => {

  const types = {

    purpleButterfly: { backgroundImage: `url(${purpleButterfly})`, width: "35px", height: "35px" },
    blueButterfly: { backgroundImage: `url (${blueButterfly})`, width: "35px", height: "35px" },
    pinkButterfly: { backgroundImage: `url (${pinkButterfly})`, width: "35px" , height : "35px" },
  }


  function getPosition(butterflyWidth) {
    const diameter = 380;
    const radius = diameter / 2;
    const butterflyradius = parseInt(butterflyWidth) / 2;

    const butterflyTop = Math.round(Math.random() * diameter);
    const butterflyLeft = Math.round(Math.random() * diameter);

    const distance = Math.sqrt(
      Math.pow(butterflyTop - radius, 2) + Math.pow(butterflyLeft - radius, 2)
    ) + butterflyradius;

    return distance < radius
      ? {
        top: butterflyTop - butterflyradius,
        left: butterflyLeft - butterflyradius
      }
      : getPosition(butterflyWidth);
  }

  // Get random position for this ingredient.
  if (!fixed) {
    const position = getPosition(types[type].width);
    types[type].top = position.top + "px";
    types[type].left = position.left + "px";
  }
  // Get random rotation for this ingredient.


  return (
    <div className={classes.PartsDecor} style={types[type]}></div>
  );
}


export default React.memo(PartsDecor);
