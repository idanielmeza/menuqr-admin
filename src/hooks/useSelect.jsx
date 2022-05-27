import { useState, useContext } from "react";
import UserContext from "../context/userContext/userContext";

const UseSelect = (titulo, datos, categoria=null) => {
    
    const {getProductos} = useContext(UserContext);

    const [state,setState] = useState(categoria ? categoria : '');

    const Select = ()=>  
        <>
            <label>{titulo}</label>
            <select onChange={ (e)=>{
                    setState(e.target.value)
                    if(titulo =='Categorias'){
                        getProductos(e.target.value)
                    }
                } } value={state}>
                <option value='' disabled>--Seleccionar--</option>
                {
                    datos.map(item=> (
                        <option key={item.id} value={item.id}>
                            {item.nombre}
                        </option>
                    ))
                }
            </select>
        </>
    ;

    return [state,Select,setState];
}
 
export default UseSelect;