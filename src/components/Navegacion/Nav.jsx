 import SearchBar from "./SearchBar";
 import { Link } from "react-router-dom";
import style from './Nav.module.css'


const Nav = ({onSearch}) =>{
    return(
        <div className={style.contenedor}>
            <SearchBar onSearch={onSearch}/>
           <Link to='/about'>
           <button>About</button>
           </Link>

           <Link to='/home'>
           <button>Home</button>
           </Link>

           <Link to='/favorites'>
           <button>Favorites</button>
           </Link>
        </div>
    )
}

export default Nav;