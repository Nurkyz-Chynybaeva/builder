import classes from "./DecorControls.module.css";
import DecorControl from "./DecorControl/DecorControl";
import Button from "../../UL/Button/Button";

const DecorControls =({
    butterflies , 
    addButterfly , 
    removeButterfly ,
    startOrdering
}) =>
{const results = []
    let total = 0;
    
    for (const butterfly in butterflies) {
        total += butterflies[butterfly];
results.push(<DecorControl 
    type = {butterfly}
    key={butterfly}
    count={butterflies[butterfly]}
    add={addButterfly}
    remove = {removeButterfly}
    />)
    }
    return(
        <div className={classes.DecorControls}>
            <strong>Colors</strong>
            {results}
            <Button disabled={!total} onClick={startOrdering}>Order</Button>
        </div>
    );
}
export default DecorControls;





