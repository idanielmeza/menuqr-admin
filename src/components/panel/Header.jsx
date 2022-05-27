import { Link } from "react-router-dom";

const Header = ({nombre}) => {


    return (
        <nav>
            <ul className='is-flex justify-content-center nav'>
                <li 
                className={`list-item ${nombre == 'qr' ? 'list-item-active' : null}`}>
                    <Link to='/'>QR</Link>
                </li>
                <li
                className={`list-item ${nombre == 'menu' ? 'list-item-active' : null}`}>
                    <Link to='/menu'>Menu</Link>
                </li>
                <li 
                className={`list-item ${nombre == 'registro' ? 'list-item-active' : null}`}>
                    <Link to='/registro'>Registro</Link>
                </li>
                <li 
                className={`list-item ${nombre == 'account' ? 'list-item-active' : null}`}>
                    <Link to='/cuenta'>Cuenta</Link>
                </li>
            </ul>
        </nav>
      );
}
 
export default Header;