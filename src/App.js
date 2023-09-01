import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Navegacion/Nav';
import { useState,useEffect } from 'react';
import axios from 'axios';
import {Routes,Route, useLocation,useNavigate} from 'react-router-dom'
import About from './components/About/About';
import Deatil from './components/Deatil';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

function App() { 

   const [characters,setCharacters]  = useState([]);
   const {pathname} = useLocation();
   const [access,setAccess]=useState(false);
   const navigate = useNavigate();

   const EMAIL = 'nicoamoedo@gmail.com';
   const PASSWORD = 'nicolasa';

const login = (userData)=>{
   if(userData.email === EMAIL && userData.password === PASSWORD){
      setAccess(true);
      navigate('/home');
   }
}
useEffect(() => {
   !access && navigate('/');
}, [access]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   
   const onClose = (id) =>{
      setCharacters(
         characters.filter((char)=>{
            return char.id !== Number(id)
         })
      )
   }
   
   return (
      <div className='App'>
        {pathname !== '/' && <Nav onSearch={onSearch}/>}
         
         <Routes>
            <Route path='/' element = {<Form login={login}/>}></Route>
            <Route path='/home' element = {<Cards characters={characters} onClose={onClose} />}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/deatil/:id' element={<Deatil/>}></Route>
            <Route path='/favorites' element={<Favorites/>}></Route>
         </Routes>   
         
      </div>
   );
}

export default App;
