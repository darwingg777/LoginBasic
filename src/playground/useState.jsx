import { useState } from "react";
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
         </div>
    );
}

export default UseStateContador;