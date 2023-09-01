import { ADDFAV, FILTER,ORDER, REMOVEFAV } from "./action.types";

    const initialState = {
        myFavorites : [],
        allCharacters:[]
    };

    const reducer= (state = initialState,action)=>{
        switch(action.type){
            case ADDFAV:
                return{...state,
                    myFavorites:[...state.allCharacters,action.payload],
                    allCharacters:[...state.allCharacters,action.payload]
                }

            case REMOVEFAV:
                return{...state,
                    myFavorites:state.myFavorites.filter((fav)=> fav.id !== Number(action.payload))
                }
            
            case FILTER :
               const allCharactersFiltered = state.allCharacters.filter((char)=> char.gender === action.payload);
               return{
                ...state,
                myFavorites: allCharactersFiltered
               }

               case ORDER:
                const allCharactersCopy = [...state.allCharacters];
                return{
                    ...state ,
                    myFavorites:
                    action.payload === "A"
                    ?   allCharactersCopy.sort((a,b)=> a.id - b.id)
                    :   allCharactersCopy.sort((a,b)=> b.id - a.id)
                }
                default:return{...state}
            }
    };

    export default reducer;