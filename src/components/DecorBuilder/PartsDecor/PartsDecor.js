import React from "react";
import classes from "./PartsDecor.module.css";
import purpleButterfly from "../../../images/bluebutterfly.jpg";
import blueButterfly from "../../../images/purpleButterfly.png";



const PartsDecor = ({ type , fixed }) => {
  const types = {
    purpleButterfly : {backgroundImage : `url(${first})` , width : "35px" , height : "35px"} ,

blueButterfly : {backgroundImage :`url (${second})` , width : "35px", height : "35px"},
  }
  
return (
  <div className={classes.PartsDecor} style={types[type]}></div>
);

}


export default React.memo(PartsDecor);

