import classes from "./DecorControl.module.css";                  
import DecorControl from "./DecorControl/DecorControl";

const DecorControl = ( {type , add , remove}) => {

  return ( <div className = {classes.DecorControl}>

<button className={classes.more} onClick={() => add(type)}>+</button>






