
import classes from "./Button.module.css";

const Button = (props) => {
  const className = [classes.Button];
  if (props.purple) {
    className.push(classes.green);
  }

  return (
    <button {...props} className={className.join(' ')}>{props.children}</button>
  );
}

export default Button;