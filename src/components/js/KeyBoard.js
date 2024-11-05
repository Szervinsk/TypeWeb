import '../css/KeyBoard.css'
import { useEffect } from 'react'

function KeyBoard() {

    useEffect(() => {
        const handleKeyDown = (event) => {
            const pressedKey = event.key;
            
            movement(pressedKey) // movimentar as teclas
            type(pressedKey); // escrever no controle (logo após vai ser a ferramenta de captura e comparação junto com o texto)
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

        function type(pressedKey) {
            const Controle = document.querySelector('.Controle');

            const key = pressedKey.toLowerCase()
            const keyMap = {
                backspace: () => Controle.textContent = Controle.textContent.slice(0, -1),
                tab: () => console.log('caracter especial'),
                alt: () => console.log('caracter especial'),
                shift: () => console.log('caracter especial'),
                control: () => console.log('caracter especial'),
                meta: () => console.log('caracter especial'),
                enter: () => console.log('caracter especial'),
                space: () => Controle.textContent += ' ',
                capslock: () => console.log('CAPS'),
                dead: () => console.log('acento')
            }; //casos especiais caso a tecla deles sejam apertadas

            // Converte a tecla para minúsculas para garantir consistência
            const normalizedKey = key;

            // Verifica se a tecla está no mapa de ações
            if (keyMap[normalizedKey]) {
                keyMap[normalizedKey]();
            } else {
                Controle.textContent += pressedKey;
            }
} 

        function movement(pressedKey){
            console.log(pressedKey)
            const buttons = document.querySelectorAll('.buttons, .buttons_long, .buttons_medium_long, .button_space');
            
            if (pressedKey === ' ' || pressedKey.toLowerCase() === 'space' || pressedKey.toLowerCase() === 'spacebar') {
                pressedKey = 'spacebar'; // Ajuste conforme o valor exato do botão
            }
            
            buttons.forEach(button => {
                if (button.textContent.trim().toLowerCase() === pressedKey.toLowerCase()) {
                    //button.style.backgroundColor = '#21ff6b';
                    button.classList.add('active')
                } else {
                    //button.style.backgroundColor = '';
                    button.classList.remove('active')
                }
            });
        } 

        let capsAtivado = false; // Estado global para o Caps Lock

            // Configura o ouvinte de evento para a tecla Caps Lock apenas uma vez
            document.addEventListener('keydown', (e) => {
                if (e.key === 'CapsLock') {
                    capsAtivado = !capsAtivado; // Alterna o estado do Caps Lock
                    const aviso = document.querySelector('.aviso_caps');
                    aviso.textContent = capsAtivado ? 'CAPS ATIVADO' : 'CAPS DESATIVADO';
                }
            });

            function caps(pressedKey) {
                // Converte a tecla para maiúsculas se o Caps Lock estiver ativado
                return capsAtivado ? pressedKey.toUpperCase() : pressedKey.toLowerCase();
            }

            // Exemplo de uso
            document.addEventListener('keydown', (e) => {
                const teclaProcessada = caps(e.key);
                // console.log("Tecla processada:", teclaProcessada);
            });




    return (


        <div>
            <div>
                <h3 className='Controle'>Controle: </h3>
            <h2 className='aviso_caps , Controle'> CAPS... </h2>
            </div>



            <div className='line'>
                <div className='buttons'>' / "</div>
                <div className='buttons'>1</div>
                <div className='buttons'>2</div>
                <div className='buttons'>3</div>
                <div className='buttons'>4</div>
                <div className='buttons'>5</div>
                <div className='buttons'>6</div>
                <div className='buttons'>7 </div>
                <div className='buttons'>8</div>
                <div className='buttons'>9</div>
                <div className='buttons'>0 </div>
                <div className='buttons'>-</div>
                <div className='buttons'>=</div>
                <div className='buttons_long'>Backspace</div>
            </div>

            <div className="line">
                <div className="line_plus_enter">
                    <div className='line'>
                        <div className='buttons_medium_long'>Tab</div>
                        <div className='buttons'>q</div>
                        <div className='buttons'>w</div>
                        <div className='buttons'>e</div>
                        <div className='buttons'>r</div>
                        <div className='buttons'>t</div>
                        <div className='buttons'>y</div>
                        <div className='buttons'>u</div>
                        <div className='buttons'>i</div>
                        <div className='buttons'>o</div>
                        <div className='buttons'>p</div>
                        <div className='buttons'>´</div>
                        <div className='buttons'>[</div>
                    </div>

                    <div className='line'>
                        <div className='buttons_medium_long'>Capslock</div>
                        <div className='buttons'>a</div>
                        <div className='buttons'>s</div>
                        <div className='buttons'>d</div>
                        <div className='buttons'>f</div>
                        <div className='buttons'>g</div>
                        <div className='buttons'>h</div>
                        <div className='buttons'>j</div>
                        <div className='buttons'>k</div>
                        <div className='buttons'>l</div>
                        <div className='buttons'>ç</div>
                        <div className='buttons'>~</div>
                        <div className='buttons'>]</div>
                    </div>
                </div>
                        <div className='button_enter'>Enter</div>
            </div>

            <div className='line'>
                <div className='buttons'>Shift</div>
                <div className='buttons'>\ |</div>
                <div className='buttons'>z</div>
                <div className='buttons'>x</div>
                <div className='buttons'>c</div>
                <div className='buttons'>v</div>
                <div className='buttons'>b</div>
                <div className='buttons'>n</div>
                <div className='buttons'>m</div>
                <div className='buttons'>,</div>
                <div className='buttons'>.</div>
                <div className='buttons'>;-</div>
                <div className='buttons'>/</div>
                <div className='buttons_long'>Shift</div>
            </div>

            <div className='line'>
                <div className='buttons'>Ctrl</div>
                <div className='buttons'>\ Win</div>
                <div className='buttons'>Alt</div>
                <div className='button_space'>SpaceBar</div>
                <div className='buttons'>Alt</div>
                <div className='buttons'>Fn</div>
                <div className='buttons'>sla</div>
                <div className='buttons'>Ctrl</div>
            </div>

        </div>
    )
} export default KeyBoard