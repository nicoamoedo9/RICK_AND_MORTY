const validation = (data)=>{
    let errors = {}

    if(!data.email.includes('@')){
        errors.email = 'Email is not valid'
    }
    if(data.length){
        errors.email = 'Ingrese su Email'
    }
    if(data.email.length > 35){
        errors.email ='El email no debe superar los 35 caracteres'
    }
    
    if(/\d/.test(data.password)){
        errors.password ='Debe contener al menos un numero'
    }
    
    if(data.password.length <6 || data.password.length > 10){
        errors.password='Debe tener entre 6 y 10 caracteres'
    }
    return errors
}

export default validation;