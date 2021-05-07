import {ADD_BUTTERFLY , REMOVE_BUTTERFLY} from "./types";

export const add = (butterflies) => ({
    type: "ADD_BUTTERFLY", 
    butterfly: butterfly
});

export const remove = (butterfly) => ({
    type: "REMOVE_BUTTERFLY", 
    butterfly: butterfly
})