import classes from "./DecorPreview.module.css";
import PartsDecor from "../PartsDecor/PartsDecor";
import backgroundImage from "../../../images/background.png"


const DecorPreview = ({ butterflies , price }) => {
  const result = [];
  for (const butterfly in butterflies) {
    for (let i = 0; i < butterflies[butterfly]; i++) {
      result.push(<PartsDecor

        key = {butterfly + i}
                type={butterfly}
      />)
    }
  }


  return (
    <div className={classes.DecorPreview}>
 <div className={classes.decor}>
<div className = {classes.butterflies}
style = {{backgroundImage : `url(${backgroundImage})`}}
>
        {result}
  </div>
    </div>

<div className={classes.price}>{price.toFixed(1)} som</div>

</div>
  );
}

export default DecorPreview;

