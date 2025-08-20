import React from 'react';
import { Link } from 'react-router-dom';
function Register(){
    return(
        <div>
            <h1>REGISTRO</h1>
            <Link to="/">
            <button>VOLVER AL LOGIN</button>
            </Link>
          
        </div>
    )
}

export default Register;