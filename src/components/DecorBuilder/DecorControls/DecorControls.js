import classes from "./DecorControls.module.css";
import DecorControl from "./DecorControl/DecorControl";
import Button from "../../Ul/Button/Button";

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
    key={butterfly}  
    add={addButterfly}
    remove = {removeButterfly}
count={butterflies[butterfly]}
    type = {butterfly}
    />)
    }
    return(
        <div className={classes.DecorControls}>
            <strong>Butterflies</strong>
            {results}
            <Button disabled={!total} onClick={startOrdering}>Order</Button>
        </div>
    );
}
export default DecorControls;


