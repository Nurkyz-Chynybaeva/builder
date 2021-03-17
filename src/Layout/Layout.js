import classes from "./layout.module.css";

const Layout = ({children}) => {
  return (
    <div className = {classes.Layout}>
     {children}
    </div>
  )
}

export default Layout;