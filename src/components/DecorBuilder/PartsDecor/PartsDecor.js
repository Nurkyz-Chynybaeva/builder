
import React from "react";
import classes from "./PartsDecor.module.css";
import blueButterfly from "../../../images/blueButterfly.png";
import coralButterfly from "../../../images/coralButterfly.png";
import purpleButterfly from "../../../images/purpleButterfly.png";
import darkBlueButterfly from "../../../images/darkBlueButterfly.png";
import yelloButterfly from "../../../images/yelloButterfly.png";
import colorfulButterfly from "../../../images/colorfulButterfly.png";
import saturatedRedButterfly from "../../../images/saturatedRedButterfly.png";


const PartsDecor = ({ type, fixed }) => {
  const types = {
    blueButterfly: { backgroundImage: `url(${blueButterfly})`, width: "50px", height: "50px", backgroundSize: "cover", },
    coralButterfly: { backgroundImage: `url(${coralButterfly})`, width: "35px", height: "35px", backgroundSize: "cover", },
    purpleButterfly: { backgroundImage: `url(${purpleButterfly})`, width: "35px", height: "35px", backgroundSize: "cover", },
    darkBlueButterfly: { backgroundImage: `url(${darkBlueButterfly})`, width: "50px", height: "50px", backgroundSize: "cover", },
    yelloButterfly: { backgroundImage: `url(${yelloButterfly})`, width: "35px", height: "35px", backgroundSize: "cover", },
    colorfulButterfly: { backgroundImage: `url(${colorfulButterfly})`, width: "35px", height: "35px", backgroundSize: "cover", },
    saturatedRedButterfly : { backgroundImage: `url(${saturatedRedButterfly})`, width: "45px", height: "45px", backgroundSize: "cover", },
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

  if (Math.random() >= .9) {
    types[type].animationPlayState = "paused";
  }

  

  // Get random position for this ingredient.
  if (!fixed) {
    const position = getPosition(types[type].width);
    types[type].top = position.top + "px";
    types[type].left = position.left + "px";
    // classNames.push(classes.butterflies);
  }
  // Get random rotation for this butterfly.
  types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;

  return (
    <div className={classes.PartsDecor} style={types[type]}></div>
  );
}


export default React.memo(PartsDecor);

