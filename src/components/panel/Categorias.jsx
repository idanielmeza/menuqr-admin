import useSelect from "../../hooks/useSelect";
import {useEffect, useState, useContext} from 'react';
import UserContext from "../../context/userContext/userContext";
import authContext from "../../context/authContext";

const Categorias = () => {
    
    const {usuario} = useContext(authContext);
    if(!usuario){
        return <p>Cargando...</p>
    }

    const {categorias, getCategorias} = useContext(UserContext);

    const [selectState,Select] = useSelect('Categorias', categorias);
    const [categoria,setCategoria] = useState('');
    
    const handleChange = e =>{
        setCategoria(e.target.value);
    }

    const handleSubmit = e=>{
        e.preventDefault();

        if(categoria === ''){
            return console.log('Selecciona un nombre para la categoria')
        }
        actualizarCategoria();
    }

    const actualizarCategoria = async()=>{  
        try {
            const {msg} = await (await fetch(`http://localhost:4000/categorias/${selectState}`,{
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json',
                    'user-token': localStorage.getItem('user-token')
                },
                body: JSON.stringify({nombre: categoria})
            })).json()
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{

        if(selectState != ''){
            setCategoria(categorias.filter(categoria => categoria.id == selectState)[0].nombre);
        }else{
            getCategorias();
        }


    },[selectState])

    return ( 
        <>
        
        <form
            onSubmit={handleSubmit}
        className='box'>
            <div className='multi-select'>
                <Select/>
            </div>
        
            
            <div className='input-field'>
                <label>Nombre</label>
                <input 
                defaultValue={categoria}
                onChange={handleChange}
                name='nombre' type='text'/>
            </div>

            <div className='input-btn'>
                <input className='btn-form' type='submit' value='Actualizar'/>
                <button className='btn-edit' type='button'>Eliminar</button>
            </div>
            

        </form>
        </>
     );
}
 
export default Categorias;