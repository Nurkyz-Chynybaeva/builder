import React from "react";
import classes from "./PartsDecor.module.css";
import first from "../../../images/first.jpg";
import roz from "../../../images/roz.png";


const PartsDecor = ({type }) => {
  const types = {
    first : {backgroundImage : `url(${first})` , width : "35px" , height : "35px"} ,
    roz : {backgroundImage : `url (${roz})` , width : "35px" , height : "35px"}
  }
  
return (
  <div className={classes.PartsDecor} style={types[type]}></div>
);

}


export default React.memo(PartsDecor);




