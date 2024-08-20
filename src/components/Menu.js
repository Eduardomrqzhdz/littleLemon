import React from 'react';
import MenuCarta from './MenuCarta';
import Swal from 'sweetalert2';
import './Menu.css';

const Menu = () => {

    const orden = (id) => {
        console.log(id, "Confirmar envío");

        Swal.fire({
            title: "¿Estás seguro de tu pedido?",
            text: "¡Puedes cambiarlo!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "¡Sí, es lo que quiero!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "¡Confirmado!",
                text: "Tu pedido se ha agregado.",
                icon: "success"
              });
            }
          });
    }

    return (
        <div id='menu' className='menu-container'>
            <div className='menu-header'>
                <h3>¡Ven a disfrutar de nuestra gran carta de comida mediterránea!</h3>
                <button>Menú en línea</button>
            </div>

            <div className='cards'>
                {
                    MenuCarta.map(item => (
                        <div key={item.id} className='menu-item'>
                            <img src={item.image} alt={item.title} />
                            <div className='menu-content'>
                                <div className='heading'> 
                                    <p>{item.title}<br/><br/></p>
                                    <p>{item.price}<br/><br/></p>
                                </div>
                                <h5>{item.description}<br/><br/></h5>
                                <button className='ordenBtn' onClick={() => orden(item.id)}>Agregar Orden</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Menu;
