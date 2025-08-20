import { useState } from 'react';
import { Link } from 'react-router-dom';
function Home(){
    return(
        <div>
            <h1>HOME</h1>
            <Link to="/resgister">
            <button>IR A REGISTRO</button>
            </Link>
            <Link to="/forgot">
            <button>OLVIDE MI CONTRASEÑA</button>
            </Link>
            <Link to="/UseState">
            <button>IR AL CONTADOR</button></Link>
        </div>
    )
}

export default Home;