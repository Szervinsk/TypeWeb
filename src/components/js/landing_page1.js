import '../css/LandPage.css';
import Emogis from '../js/emojis';
import { useNavigate } from 'react-router-dom';
import Nav from '../js/nav';

function Land_page1() {
    const navigate = useNavigate();

    return (
        <div className='white_div'>
            <Nav/>
            <div>
                <h1 className='TypeName'>Type as Fast as U can</h1>
                <h3 className='subName'>Teste sua velocidade de digitação!</h3>
            </div>
            <Emogis/>

            <div className='div_button , deLado'>
                <h2 className='h2_text'>Como funciona?</h2>
                <button className='button_start' onClick={() => navigate('/type')}>Começar agora</button>
            </div>
        </div>
    );
} 

export default Land_page1;
