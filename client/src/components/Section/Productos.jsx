import './Productos.css';
import { useState, useEffect } from 'react';
import { Header } from '../Header/Header';
import { ProductosCard } from '../ProductCard/ProductCard';




export const Productos = () => {
    const [productos, setProductos] = useState([]);
    const [estado, setEstado] = useState(false);
    const [ocultar, setOcultar] = useState("Obtener Todos los productos de la Api");
    const [count, setCount] = useState(1)

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${count}`)
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if (data && data.id){
                setProductos(data)
            } else{
                alert('no se encontraron productos')
            }
        })
    },[count]);

    const handleAnterior = () =>{
        if (count > 1 ){
            setCount( count - 1)
        } else{
            alert('no se puede dar para atras')
        }
    };

    const handleSiguiente = () =>{
        setCount( count +1 )    
    };

    const handleClick = () => {
        setEstado (!estado);

        setOcultar( estado ? "Ver todos Productos" : "Ocultar productos");
    };

    return (
        <> 
            <Header title="Productos"/>
            <section className='container-princip'>
                    <div className='container-title'>
                        <h1>Productos de DummyJson</h1>
                        <div className=''>
                            <p>Aplicacion frotend apuntando a uno de los endpoint de la apy DummyJson, donde capturamos los productos en formato Json y renderizamos el cliente en componentes del lado del cliente.</p>
                            <button onClick={handleClick}>{ ocultar}</button>
                        </div>
                    </div>
                {
                    estado ? (
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
                            <img src="api.png" alt="imagen de productos" />
                        </div>
                    )
                }    

            </section>
        </>
    )
}                               