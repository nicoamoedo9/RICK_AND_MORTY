import { ADDFAV,REMOVEFAV,FILTER,ORDER} from "./action.types";

export const addFav = (character)=>{
    return {type : ADDFAV, payload:character}
};

export const removeFav = (id)=>{
    return{type:REMOVEFAV,payload:id}
};

export const filterCards = (gender)=>{
    return{ type:FILTER,payload:gender}
}

export const orderCards = (orden)=>{
return{ type:ORDER,payload:orden}
}