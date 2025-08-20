import { useState } from "react";
import { Link } from "react-router-dom";
function UseStateContador(){
    const [contador, setContador] = useState(0);
    function aumentar() {
        setContador(contador + 1);
    }
    function disminuir() {
        setContador(contador - 1);
    }
    return (
        <div>
            <h2>valorContador = {contador}</h2>
            <button onClick={aumentar}>aumentar</button>
            <button onClick={disminuir}>disminuir</button>
             <Link to="/hooks">
            <button>VOLVER AL hooks</button>
            </Link>
         </div>
    );
}

export default UseStateContador;