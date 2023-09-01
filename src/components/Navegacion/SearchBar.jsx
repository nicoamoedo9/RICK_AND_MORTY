import { useState } from "react";


export default function SearchBar({onSearch}) {

const [id,setId] = useState('');

const handleChange = (event) =>{
   setId(event.target.value)
}

   return (
      <div>
         {<><input type='search' onChange={handleChange}  value={id} placeholder="ID del personaje..."/>
         <button onClick={()=>{onSearch(id)}}>Agregar</button></>}
      </div>
   );
}
