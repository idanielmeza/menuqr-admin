import {Link} from 'react-router-dom';
const Menu = () => {
    return ( 
        <>
            
            <ul className='list'>
                <li>
                    <Link to='/menu/categorias'>Categorias</Link>
                </li>
                <li>
                    <Link to='/menu/alimentos'>Alimentos</Link>
                </li>
            </ul>

        </>
        
     );
}
 
export default Menu;