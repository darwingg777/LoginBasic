import React from 'react';
import { Link } from 'react-router-dom';
function Forgot(){
    return(
        <div>
            <h1>OLVIDE MI CONTRASEÑA</h1>
            <Link to="/">
            <button>volver al login</button>
            </Link>
           
        </div>
    )
}

export default Forgot;