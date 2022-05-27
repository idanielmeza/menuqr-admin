import useSelect from "../../hooks/useSelect";
import {useEffect, useState} from 'react';
import {useContext} from 'react';
import UserContext from "../../context/userContext/userContext";
import authContext from "../../context/authContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Alimentos = () => {

    const notify = (msg,type) => toast(msg,{
        autoClose: 2000,
        type
    })

    const {usuario} = useContext(authContext);

    if(!usuario){
        return <p>Cargando...</p>
    }

    const {productos,categorias, getCategorias} = useContext(UserContext);
    const [alimento,setAlimento] = useState({
        nombre: '',
        precio: '',
        descripcion: '',
        categoria: ''
    });
    
    const [alimentosCategoria,setAlimentosCategoria] = useState([]);
    const [selectState,Select,a] = useSelect('Categorias', categorias);
    const [selectStateA,SelectA,b] = useSelect('Alimentos', productos);
    const [selectStateN,SelectN,setCatSelect] = useSelect('Nueva Categoria', categorias);

    const handleChange = e =>{
        setAlimento({
            ...alimento,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e=>{
        e.preventDefault();
        const {nombre,precio,descripcion} = alimento;

        if(!nombre || nombre.trim() === '' || !precio || precio.trim() == '' || precio == 0 || !descripcion || descripcion.trim() === ''){
            return notify('Todos los campos son obligatorios','error');
        }
        setAlimento({
            ...alimento,
            categoria: selectStateN
        });

        console.log(alimento);
    }

    useEffect(()=>{
        if(selectState == ''){
            getCategorias();
        }else if(selectState != '' && selectState != ''){
            setAlimento({nombre: '',
            precio: '',
            descripcion: '',
            categoria: ''
        })
            setAlimento(productos.filter(producto=> producto.id == selectStateA)[0]);
            
            setCatSelect(alimento.categoria);
        }
    },[selectStateA])

    return ( 
        <>
        <ToastContainer/>
        <form className='box'
            onSubmit={handleSubmit}
        >
            <div className='multi-select'>
                <Select/>
                <SelectA/>
            </div>

            <div className='input-field'>
                <label>Nombre</label>
                <input 
                onChange={handleChange}
                name='nombre' type='text' defaultValue={
                    alimento.nombre
                }/>
            </div>

            <div className='input-field'>
                <label>Precio</label>
                <input 
                onChange={handleChange}
                name='precio' type='number' defaultValue={
                    alimento.precio
                }/>
            </div>
            <div className='input-field'>
                <label>Descripcion</label>
                <textarea className='textarea'
                name='descripcion'
                onChange={handleChange}
                    defaultValue={alimento.descripcion}
                >
                    
                </textarea>
            </div>

            <div className='multi-select'>
                <SelectN/>
            </div>


            <div className='input-btn'>
                <input className='btn-form' type='submit' value='Actualizar'/>
                <button className='btn-edit' type='button'>Eliminar</button>
            </div>
            

        </form>
        </>
     );
}
 
export default Alimentos;