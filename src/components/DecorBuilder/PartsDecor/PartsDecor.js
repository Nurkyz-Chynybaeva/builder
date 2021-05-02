import React from "react";
import classes from "./PartsDecor.module.css";
import firstButterfly from "../../../images/firstButterfly.png";
import secondButterfly from "../../../images/secondButterfly.png";
import thirdButterfly from "../../../images/thirdButterfly.png";
import fourthButterfly from "../../../images/fourthButterfly.png";
import fifthButterfly from "../../../images/fifthButterfly.png";

const PartsDecor = ({ type, fixed }) => {

  const types = {
   firstButterfly : { backgroundImage : `url(${firstButterfly})` , width : "30px" , height : "30px" },
   secondButterfly : { backgroundImage : `url(${secondButterfly})` , width : "30px" , height : "30px"},
   thirdButterfly : { backgroundImage : `url (${thirdButterfly})` , width  : "30px" , height : "30px" },
   fourthButterfly : { backgroundImage : `url (${fourthButterfly})` , width  : "30px" , height : "30px" },
   fifthButterfly : { backgroundImage : `url (${fifthButterfly})` , width  : "30px" , height : "30px" },
  }

  function getPosition(butterflyWidth) {
    const diameter = 380;
    const radius = diameter / 2;
    const butterflyRadius = parseInt(butterflyWidth) / 2;

    const butterflyTop = Math.round(Math.random() * diameter);
    const butterflyLeft = Math.round(Math.random() * diameter);

    const distance = Math.sqrt(
      Math.pow(butterflyTop - radius, 2) + Math.pow(butterflyLeft - radius, 2)
    ) + butterflyRadius;

    return distance < radius
      ? {
        top: butterflyTop - butterflyRadius,
        left: butterflyLeft - butterflyRadius
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

  types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;
  return (
    <div className={classes.PartsDecor} style={types[type]}></div>
  );
}


export default React.memo(PartsDecor);
