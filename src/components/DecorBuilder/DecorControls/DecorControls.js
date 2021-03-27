import classes from "./DecorControls.module.css";
import DecorControl from "./DecorControl/DecorControl";
const DecorControls =({butterflies , addButterfly , removeButterfly}) =>{

    removeButterfly}) =>{
        let type = {butterflies}
        const results = []
        for (const butterfly in butterflies) {
            results.push(<DecorControl 
                type = {butterfly}
               







