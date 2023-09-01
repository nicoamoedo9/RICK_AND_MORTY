import { connect } from "react-redux";
import Card from "../Card/Card";
import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../Redux/actions";
import { useState } from "react";
import style from "./Favorites-module.css"


const Favorites = ({myFavorites})=>{
const [aux,setAux] = useState();

const dispatch = useDispatch(false);

const handleOrder = (event)=>{
    dispatch(orderCards(event.target.value))
    setAux(!aux)
}

const hanldeFilter = (event)=>{
    dispatch(filterCards(event.target.value))
};


    return(
        <div>
            <div > 
              <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
              </select>
            </div>
            

            <select onChange={hanldeFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>


            {   myFavorites.length &&
                myFavorites.map(({id,name,status,species,gender,origin,image})=>{
                    return(
                        <Card 
                        key={id}
                        id={id}
                        name={name}
                        status={status}
                        species={species}
                        gender={gender}
                        origin={origin}
                        image={image}/>
                        )
                    })
                    
                   
            }
        </div>
    )
}

const mapStateToProps=(state)=>{
return{
    myFavorites : state.myFavorites
}
}



export default connect(mapStateToProps,null)(Favorites);