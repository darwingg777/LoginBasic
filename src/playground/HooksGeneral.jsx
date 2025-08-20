import { useState } from 'react';
import { Link } from 'react-router-dom';
function Hook(){
    return(
        <div>
            <h1>HOOKS GENERAL</h1>
            <Link to={"/useState"}>
            <button>IR A USESTATE</button>
            </Link>
           
        </div>
    )
}

export default Hook;