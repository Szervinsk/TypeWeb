// importações 
import '../css/Nav.css'
import TypeFastUCan from './TypeFast'
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; //ferramenta de rotas 

// função de navegador para acessar as páginas 
function Nav(){

    return (

        <>
            <BrowserRouter>
                <div>
                    <ul className='nav'>
                        <li className='links'><Link to="/">Começar agora</Link></li>
                    </ul>
                </div>

                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Nav

