import classes from "./DecorControls.module.css";
import DecorControl from "./DecorControl/DecorControl";

const DecorControls =({butterflies , addButterfly , removeButterfly}) =>{
    let type = {butterflies}
    const results = []

    for (const butterfly in butterflies) {
results.push(<DecorControl 
    type = {butterfly}
    key={butterfly}
    add={addButterfly}
    remove = {removeButterfly}
    
    />)
    }
    return(
        <div className={classes.DecorControls}>
            <strong>Colors</strong>
            {results}
        </div>
    );
}
export default DecorControls;