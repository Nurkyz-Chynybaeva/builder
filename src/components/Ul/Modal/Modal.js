import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = ({ children }) => {
  return (
    <div className={classes.Modal}>
      <Backdrop show={true} />
      <div className={classes.content}>
        {children}
      </div>
      <div>
        <h1>
          <p></p>
        </h1>
      </div>
    </div>
  );
};

export default Modal;