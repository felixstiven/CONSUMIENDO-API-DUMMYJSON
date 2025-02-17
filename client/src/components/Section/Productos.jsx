import './Productos.css';
import { useState, useEffect } from 'react';
import { Header } from '../Header/Header';
import { ProductosCard } from '../ProductCard/ProductCard';
import { use } from 'react';







export const Productos = () => {
    const [productos, setProductos] = useState([]);
    const [estado, setEstado] = useState(false);
    const [ocultar, setOcultar] = useState("Obtener Todos los productos de la Api");



        
            useEffect(()=>{
                fetch(`https://dummyjson.com/products`)
                .then(res => res.json())
                .then(data=>{
                    console.log(data)
                    setProductos(data.products) 
                })
            },[])
   
   

    const handleClick = () => {
        setEstado (!estado);

        setOcultar( estado ? "Ver todos Productos" : "Ocultar productos");
    }

    return (
        <> 
            <Header title="Productos"/>
            <section>
                <div>
                    <h1>Productos de DummyJson</h1>
                    <div>
                        <p>Aplicacion frotend apuntando a uno de los endpoint de la apy DummyJson, donde capturamos los productos en formato Json y renderizamos el cliente en componentes del lado del cliente.</p>
                         <button onClick={handleClick}>{ ocultar}</button>
                    </div>
                </div>
            </section>
            {
                productos && productos.map((producto)=>{
                    if (estado === true){
                        return (
                            <section key={producto.id}><ProductosCard contenido={producto}/></section>
                        ) 
                    }
                    
                })
           }
        </>
    )
}                               