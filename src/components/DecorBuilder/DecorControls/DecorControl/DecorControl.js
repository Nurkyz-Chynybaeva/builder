import classes from "./DecorControl.module.css";                  
import PartsDecor from "../../PartsDecor/PartsDecor";

const DecorControl = ( {type , add , remove}) => {

  return ( <div className = {classes.DecorControl}>

<button className={classes.more} onClick={() => add(type)}>+</button>



<div className={classes.butterfly}>
       <PartsDecor type={type} />
      </div>

<button className = {classes.less} onClick = {() => remove(type)}>-</button>
  </div>);
}


export default DecorControl;