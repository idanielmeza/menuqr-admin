import React,{useReducer} from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';


const AuthState = ({children}) => {

    const initialState = {
        token: localStorage.getItem('user-token'),
        autenticado: null,
        usuario: null,
        cargando: true, 
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const autenticar = datos =>{
        try {
            const {usuario, token} = datos;

            dispatch({
                type: 'LOGIN',
                payload: {
                    token : token,
                    usuario
                }
            });            

        } catch (error) {
            console.log(error);
        }

    }

    const logout = ()=>{

        localStorage.removeItem('user-token');

        dispatch({
            type: 'LOGUT'
        })

    }

    const obtenerUsuario = async()=>{

        const userToken = localStorage.getItem('user-token');


        try {
            
            const {usuario,token} = await (await fetch('http://localhost:4000/auth/token',{
                headers:{
                    'user-token': userToken
                },
                method: 'GET'
            })).json();

            autenticar({usuario,token});

            return true;

        } catch (error) {
            
            console.log(error);
            return false;
        }    

    }


    return (
        <AuthContext.Provider
            value={{
                autenticar,
                logout,
                obtenerUsuario,
                autenticado: state.autenticado,
                token: state.token,
                usuario: state.usuario,
                cargando: state.cargando
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}

export default AuthState;