import classes from "./Logo.module.css";
import logo from "../../../images/myLogo.png";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src = {logo} alt = "Logo of the room decor" />    
        <div>Wallpaper</div>
    </div>
  );
}

export default Logo;