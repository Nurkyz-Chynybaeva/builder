import classes from "./DecorPreview.module.css";
import PartsOfTheDecor from "../PartsOfTheDecor/PartsPfTheDecor";

const DecorPreview = ({ingredients}) => {
  const result = []

  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
        result.push(<PartsOfTheDecor type = {ingredient} />)
    }
   }
  

  return ( 
    <div className= {classes.DecorPreview}>
 {result}
    </div>
   );
}
 
export default DecorPreview;


