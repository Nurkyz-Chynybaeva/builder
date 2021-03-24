import classes from "./Logo.module.css";
import logo from "../../images/third.png";
const Logo = () => {
  return (
    <div className = {classes.Logo}>
        <img src={logo} alt="logo"/>
        <h3>Decor</h3>
    </div>
  )
}

export default Logo;