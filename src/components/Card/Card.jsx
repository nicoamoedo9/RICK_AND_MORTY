import { Link, NavLink } from "react-router-dom";
import style from "./Card.module.css"
import { connect } from "react-redux";
import { addFav,removeFav } from "../../Redux/actions";
import { useState,useEffect } from "react";


 const Card=({id, name,status,species,gender,origin,image,onClose,addFav,removeFav,myFavorites})=> {

const[isFav,setIsFavs]= useState(false);

const handleFavorite = ()=>{
   isFav ? removeFav(id) : addFav({id, name,status,species,gender,origin,image,onClose});
   setIsFavs(!isFav)
}

useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFavs(true);
      }
   });
}, [myFavorites]);

   return (
      <div className={style.contenedor}>
            <div className={style.botones}>
            {isFav ? (<button className={style.boton_favorite} onClick={handleFavorite}>❤️</button>) :
                     (<button onClick={handleFavorite}>🤍</button>)}

                     <button className={style.boton_cerrar}onClick = {()=>{onClose(id)}} >X</button>
            </div>

        <img src={image} alt={image} /> 
        <Link to = {`/deatil/${id}`}>
        <h2 className={style.nombre}>{name}</h2>
        </Link>
         <h2>{status}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        <h2>{origin}</h2>
      </div>
   );
}

const mapDispatchToProps = (dispatch)=>{
return{
addFav: (character) => dispatch(addFav(character)),
removeFav:(id)=>dispatch(removeFav(id))
}
};

const mapStateToProps = (state)=>{
return{ myFavorites:state.myFavorites }
}


export default connect(mapStateToProps,mapDispatchToProps)(Card);