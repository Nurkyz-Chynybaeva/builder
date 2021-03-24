import classes from "./DecorBuilder.module.css";
import DecorControls from "./DecorControls/DecorControls";
import DecorPreview from "./DecorPreview/DecorPreview";

const DecorBuilder = () => {
    const ingredients ={
        tomato: 1,
        avocado: 1,
        cucumber: 1,
    };

    return ( <div className={classes.DecorBuilder}>
        <DecorPreview ingredients={ingredients}/>
        <DecorControls/>
    </div>
     );
}
 
export default DecorBuilder;