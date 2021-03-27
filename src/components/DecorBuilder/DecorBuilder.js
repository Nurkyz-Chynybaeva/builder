import classes from "./DecorBuilder.module.css";
import DecorPreview from "./DecorPreview/DecorPreview";
import DecorControls from "./DecorControls/DecorControls";
import {useState} from "react";


const DecorBuilder = () => {
    
    const [butterflies , setButterflies ] = useState({ 
        first : 5 ,   
        roz : 5 
      

    });
    function addButterfly(type){
        const newButterflies = {...butterflies};
        newButterflies[type]++;
        setButterflies(newButterflies);
    }

    function removeButterfly(type){
        const newButterflies = {...butterflies};
        newButterflies[type]--;
        setButterflies(newButterflies);
    }

    return ( <div className={classes.DecorBuilder}>
         <DecorPreview butterflies={butterflies}/>