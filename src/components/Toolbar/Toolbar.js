import classes from "./Toolbar.module.css";

const Toolbar = ({children}) => {
  return (
    <div className = {classes.Toolbar}>
    <Logo/>
    <Nav/>
    </div>
  )
}

export default Toolbar;