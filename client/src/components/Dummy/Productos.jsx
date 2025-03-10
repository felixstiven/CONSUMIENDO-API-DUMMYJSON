import './Productos.css';
import { useState, useEffect } from 'react';
import { Header } from '../Header/Header';
import { ProductosCard } from '../ProductCard/ProductCard';
import { Users } from './Users.jsx';




export const Productos = () => {
    const [productos, setProductos] = useState([]);
    const [estadoProducts, setEstadoProducts] = useState(false);
    const [estadoUsuarios, setEstadoUsuarios] = useState(false);
    const [ocultarproducts, setOcultarproducts] = useState("Ver productos");
    const [ocultarUsuario, setOcultarUsuario] = useState("Ver usuario")
    const [count, setCount] = useState(1)

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${count}`)
        .then(res => {
            if (!res.ok){
                throw new Error('Error Response was not ok')
            }
            return res.json();
        })
        .then(data=>{
            if (data && data.id){
                setProductos(data)
            } else{
                alert('no se encontraron productos')
            }
        })
        .catch(error => {
            console.error("there was a problem wit fetch operation:", error);
            alert("Error al obtener productos");
        })
    },[count]);

    const handleAnterior = (event) =>{
        event.preventDefault();
        if (count > 1 ){
            setCount( count - 1)
        } else{
            alert('No se encontraron mas productos')
        }
    };

    const handleSiguiente = (event) =>{
        event.preventDefault();
        setCount( count +1 )    
    };

    const handleClickEstadoProduct = () => {
        setEstadoProducts (!estadoProducts);

        setOcultarproducts( estadoProducts ? "Ver todos Productos" : "Ocultar productos");
    };

    const handleClickEstadoUsuario = () => {
        setEstadoUsuarios (!estadoUsuarios);

        setOcultarUsuario( estadoUsuarios ? "Ver Usuarios" : "Ocultar Usuarios");
    };

    return (
        <> 
            <Header title="Productos"/>
            <section className='container-products'>
                    <div className='container-title'>
                        <h1>Productos de DummyJson</h1>
                        <div className=''>
                            <p>Aplicacion poniendo en practica frot-end y back-end apuntando a uno de los endpoint de la API DummyJson obteniendo los productos por id.</p>
                            <button onClick={handleClickEstadoProduct}>{ ocultarproducts}</button>
                        </div>
                    </div>
                {
                    estadoProducts ? (
                        <>
                            <div className='container-card'>
                                <ProductosCard key={productos.id} contenido={productos} />
                                <div className='container-button'>
                                    <button onClick={handleAnterior}>Anterior</button>
                                    <button onClick={handleSiguiente}>siguiente</button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div>
                            <img src="Snnipercar2.gif" alt="imagen de productos" />
                        </div>
                    )
                }    
                <div className='container-title'>
                        <h1>Usuarios de DummyJson</h1>
                        <div className=''>
                            <p>Aplicacion poniendo en practica frot-end y back-end apuntando a uno de los endpoint de la API DummyJson obteniendo los usuarios por id.</p>
                            <button onClick={handleClickEstadoUsuario} >{ocultarUsuario}</button>
                        </div>
                </div>
                {
                    estadoUsuarios ? (
                        <>
                            <Users/>
                        </>

                    ) : 
                    (
                        <div>
                            <img src="Snnipercar2.gif" alt="imagen de productos" />
                        </div>
                    )
                }
            </section>
        </>
    )
}                               