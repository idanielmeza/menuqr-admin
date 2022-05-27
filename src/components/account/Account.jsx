import {Link} from 'react-router-dom';

const Acount = () => {
    return ( 
        <ul className='list'>
                <li>
                    <Link to='/cuenta/profile'>Actualizar Perfil</Link>
                </li>
                <li>
                    <Link to='/cuenta/password'>Cambiar contraseña</Link>
                </li>
            </ul>
     );
}
 
export default Acount;