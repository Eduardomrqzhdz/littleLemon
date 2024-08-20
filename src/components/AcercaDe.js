import React from 'react';
import './AcercaDe.css';
import MarioandAdrianA from '../img/MarioandAdrianA.jpg';
import MarioandAdrianB from '../img/MarioandAdrianB.jpg';
const AcercaDe = () => {
    return (
        <div id='acerca-de' className='acerca-de-container'>
            <h3>Acerca de Little Lemon</h3>
            <p className='acerca-de-description'>
                Little Lemon es un restaurante de comida mediterránea ubicado en el corazón de Chicago. Nos enorgullece ofrecer platos tradicionales preparados con ingredientes frescos y auténticos, brindando una experiencia culinaria única a nuestros clientes.
            </p>
            <div className='acerca-de-photos'>
                <div className='photo'>
                    <img src={MarioandAdrianA} alt='Adrian' />
                </div>

            </div>
        </div>
    );
};

export default AcercaDe;