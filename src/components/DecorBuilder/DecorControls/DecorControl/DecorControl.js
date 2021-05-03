import classes from "./DecorControl.module.css";                
import Button from "../../../Ul/Button/Button";  
import PartsDecor from "../../PartsDecor/PartsDecor";
import { useDispatch } from "react-redux";

const DecorControl = ( {type , count}) => {
const dispatch = useDispatch();



  return ( 

  <div className = {classes.DecorControl}>
<Button onClick={() => dispatch({ type: "ADD_INGREDIENT", ingredient: type })}>+</Button>
      <div className={classes.butterfly}>
        <PartsDecor type={type} fixed />
      </div>
      <Button onClick={() => dispatch({ type: "REMOVE_INGREDIENT", ingredient: type })} disabled={!count}>-</Button>
  </div>);
}


export default DecorControl;


