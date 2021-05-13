
import React, { memo } from "react";
import classes from "./PartsDecor.module.css";
import blueButterfly from "../../../images/blueButterfly.png";
import coralButterfly from "../../../images/coralButterfly.png";
import purpleButterfly from "../../../images/purpleButterfly.png";
import whiteButterfly from "../../../images/whiteButterfly.png";
import yelloButterfly from "../../../images/yelloButterfly.png";
import oval from "../../../images/oval5.png";

const PartsDecor = ({ type, fixed }) => {
  const classNames = [classes.PartsDecor];
  const types = {
    blueButterfly: { backgroundImage: `url(${blueButterfly})`, width: "35px", height: "35px", backgroundSize: "cover", },
    coralButterfly: { backgroundImage: `url(${coralButterfly})`, width: "35px", height: "35px", backgroundSize: "cover", },
    purpleButterfly: { backgroundImage: `url(${purpleButterfly})`, width: "35px", height: "35px", backgroundSize: "cover", },
    whiteButterfly: { backgroundImage: `url(${whiteButterfly})`, width: "35px", height: "35px", backgroundSize: "cover", },
    yelloButterfly: { backgroundImage: `url(${yelloButterfly})`, width: "35px", height: "35px", backgroundSize: "cover", },
    oval : {backgroundImage : `url(${oval})` , width: "95px", height: "55px", backgroundSize: "cover",},
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
    classNames.push(classes.fixed);
  }
  // Get random rotation for this butterfly.
  types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;
  return (
    <div className={classNames.join(' ')} style={types[type]}></div>
  );


}


export default React.memo(PartsDecor);
