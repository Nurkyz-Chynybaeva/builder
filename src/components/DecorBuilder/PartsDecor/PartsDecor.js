import React from "react";
import classes from "./PartsDecor.module.css";
import first from "../../../images/first.jpg";
import second from "../../../images/second.png"



const PartsDecor = ({ type , fixed }) => {
  const types = {
    first : {backgroundImage : `url(${first})` , width : "35px" , height : "35px"} ,

second : {backgroundImage :`url (${second})` , width : "35px", height : "35px"},
  }
  
return (
  <div className={classes.PartsDecor} style={types[type]}></div>
);

}


export default React.memo(PartsDecor);






