import '../css/Nav.css';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div>
            <ul className='nav'>
                <li className='links'><Link to="/">Home</Link></li>
                <li className='links'><Link to="/login">Login</Link></li>
                <li className='links'>Sobre mim</li>
            </ul>
        </div>
    );
}

export default Nav;
