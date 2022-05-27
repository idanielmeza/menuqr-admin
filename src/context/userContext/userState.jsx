import UserContext from "./userContext";
import userReducer from "./userReducer";
import { useReducer,useContext } from "react";
import authContext from "../authContext";
import {toast} from 'react-toastify';

const UserState = ({children})=>{

    const {usuario} = useContext(authContext);

    const initialState = {
        categorias: [],
        categoriaActual: null,
        productos:[],
        productoActual: null,
    }

    const [state, dispatch] = useReducer(userReducer, initialState);

    const getCategorias = async()=>{

        try {
            const {categorias,total,msg} = await(await fetch(`http://localhost:4000/categorias/all?negocio=${usuario.negocio}`)).json();
            if(total === 0){
                return toast('Bienvenido, empieza creando categorias y productos')
            }
            if(msg){
                throw new Error('Hubo un error');
            }
            dispatch({
                type: 'GET_CATEGORIAS',
                payload:{
                    categorias,
                    productos: []
                }
            })
        } catch (error) {
            console.log(error);
        }
        
    }

    const getProductos = async(id)=>{
        try {

            const {productos,total} = await (await fetch(`http://localhost:4000/productos/categoria/${id}?negocio=${usuario.negocio}&limite=200`)).json();

            if(total === 0){
                toast('No hay productos en esta categoria',{
                    autoClose: 2000,
                    type: 'error'
                })
            }

            dispatch({
                type: 'CHANGE_CATEGORIA',
                payload:{
                    categoria: id,
                    productos
                }
            })
        } catch (error) {
            
        }
       


    }

    return(
        <UserContext.Provider
            value={{
                categorias: state.categorias,
                categoriaActual: state.categoriaActual,
                productos: state.productos,
                productoActual: state.productoActual,
                getCategorias,
                getProductos
            }}
        >
            {children}
        </UserContext.Provider>
    )

}

export default UserState;