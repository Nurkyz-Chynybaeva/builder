import classes from "./DecorPreview.module.css";
import PartsDecor from "../PartsDecor/PartsDecor";
import butterfliesBackground from "../../../images/background2.jpg";

const DecorPreview = ({ butterflies }) => {
  const result = [];

  for (const butterfly in butterflies) {
    for (let i = 0; i < butterflies[butterfly]; i++) {
      result.push(<PartsDecor
        type={butterfly}
      />)
    }
  }


  return (
    <div className={classes.DecorPreview}>

      <div
        className={classes.butterflies}
        style={{ backgroundImage: `url(${butterfliesBackground})` }}>
        {result}
      </div>
    </div>
  );
}

export default DecorPreview;


