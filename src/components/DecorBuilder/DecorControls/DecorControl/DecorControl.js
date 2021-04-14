import classes from "./DecorControl.module.css";                
import Button from "../../../UL/Button/Button";  
import PartsDecor from "../../PartsDecor/PartsDecor";

const DecorControl = ( {type , add , remove , count}) => {

  return ( 
  <div className = {classes.DecorControl}>
<Button onClick={() => add(type)}>+</Button>
      <div className={classes.butterfly}>
        <PartsDecor type={type} fixed />
      </div>
      <Button onClick={() => remove(type)}  disabled={!count}>-</Button>
  </div>);
}


export default DecorControl;
