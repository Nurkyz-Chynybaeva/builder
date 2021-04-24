import classes from "./DecorPreview.module.css";
import PartsDecor from "../PartsDecor/PartsDecor";



const DecorPreview = ({ butterflies , price }) => {
  const result = [];
  for (const butterfly in butterflies) {
    for (let i = 0; i < butterflies[butterfly]; i++) {
      result.push(<PartsDecor
        type={butterfly}
        key = {butterfly + i}
      />)
    }
  }


  return (
    <div className={classes.DecorPreview}>
 <div className={classes.decor}>

        {result}
  
    </div>

<div className={classes.price}>{price.toFixed(1)} som</div>

</div>
  );
}

export default DecorPreview;

