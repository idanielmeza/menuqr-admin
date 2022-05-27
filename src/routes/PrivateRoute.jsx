import {useContext,useEffect} from 'react';
import AuthContext from '../context/authContext';
import {Navigate, useNavigate} from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const authContext = useContext(AuthContext);
    const navigate = useNavigate();

    const {obtenerUsuario, usuario, autenticado, cargando} = authContext;

    useEffect(()=>{

        const check= async()=>{
            if(!usuario){
                const resp = await obtenerUsuario();
                if(!resp){
                    navigate('/login')
                }
             }
        }

        check();
        
    },[autenticado,usuario])

    return ( 

        !autenticado && !usuario && !cargando ?(
            <Navigate to='/login'/>
        ) : (
            children
        ) 

     );
    
}

export default PrivateRoute;