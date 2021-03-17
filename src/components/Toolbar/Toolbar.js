import classes from "./Toolbar.module.css";

const Toolbar = ({children}) => {
  return (
    <div className = {classes.Toolbar}>
     {children}
    </div>
  )
}

export default Toolbar;