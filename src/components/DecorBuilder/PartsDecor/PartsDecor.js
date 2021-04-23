import React from "react";
import classes from "./PartsDecor.module.css";
import purpleButterfly from "../../../images/purplebutterfly.png";
import blueButterfly from "../../../images/bluebutterfly.jpg";



const PartsDecor = ({ type , fixed }) => {
  const types = {
    purpleButterfly : {backgroundImage : `url(${purpleButterfly})` , width : "35px" , height : "35px"} ,

blueButterfly : {backgroundImage :`url (${blueButterfly})` , width : "35px", height : "35px"},
  }
  
return (
  <div className={classes.PartsDecor} style={types[type]}></div>
);

}


export default React.memo(PartsDecor);

