import classes from "./Logo.module.css";
import logo from "../../../images/background2.jpg";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt="Logo of the Pizza project" />
      <div>Pizza</div>
    </div>
  );
}

export default Logo;