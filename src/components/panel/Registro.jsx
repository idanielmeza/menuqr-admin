import {Link} from 'react-router-dom';

const Registro = () => {
    return ( 
        <ul className='list'>
                <li>
                    <Link to='/registro/categorias'>Agregar Categorias</Link>
                </li>
                <li>
                    <Link to='/registro/alimentos'>Agregar Alimentos</Link>
                </li>
            </ul>
     );
}
 
export default Registro;