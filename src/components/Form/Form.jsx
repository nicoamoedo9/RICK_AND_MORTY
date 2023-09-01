
import { useState } from 'react';
import style from './Form.module.css'
import validation from '../validation';

const Form = ({login})=>{
 
    const [userData, setUserData] = useState({
        email:'',
        password: ''
    });

const [errors, setErrors] = useState({

})

    const handleChange = (event)=>{
        setUserData({
            ...userData,[event.target.name]: event.target.value
        })
    setErrors(validation({
        ...userData,[event.target.name]:event.target.value
    }))
    
    }
const handleSubmit = (event)=>{
    event.preventDefault()
    login(userData)
}


    return( 
<div className={style.contenedor}>
    <form onSubmit={handleSubmit}>
        <div>
            <h2>Inicia sesion</h2>
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input value={userData.email} type="text" name='email' placeholder='Ingrese su Email' onChange={handleChange}  />
            {errors.email && <p> {errors.email} </p>}
        </div>
    
        <div>
            <label htmlFor="password">Password:</label>
            <input value={userData.password} type="password" name='password' placeholder='Contraseña' onChange={handleChange}/>
            {errors.password && <p>{errors.password}</p>}
        </div>
    
        <div>
            <button>SUBMIT</button>
        </div>
    
    </form>
</div>
    )
}

export default Form;