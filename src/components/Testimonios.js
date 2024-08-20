import React from 'react';
import './Testimonios.css';

const testimoniosData = [
    {
        id: 1,
        name: "Ana",
        rating: 5,
        text: "¡La mejor comida que he probado! El servicio fue excelente y el ambiente muy acogedor.",
    },
    {
        id: 2,
        name: "Juan",
        rating: 4,
        text: "Me encantó la variedad en el menú. Definitivamente volveré pronto.",
    },
    {
        id: 3,
        name: "Lucía",
        rating: 5,
        text: "El sabor es increíble y las porciones son generosas. ¡Altamente recomendado!",
    },
];

const Testimonios = () => {
    return (
        <div id='testimonios' className='testimonios-container'>
            <h3>Nuestros Clientes Hablan</h3>
            <div className='testimonios-grid'>
                {testimoniosData.map(testimonio => (
                    <div key={testimonio.id} className='testimonio-item'>
                        <div className='testimonio-rating'>
                            {"⭐".repeat(testimonio.rating)}
                        </div>
                        <p className='testimonio-text'>" {testimonio.text} "</p>
                        <h4 className='testimonio-name'>- {testimonio.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonios;
