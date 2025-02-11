import './Section.css';
import { useState, useEffect } from 'react';
import { Header } from '../Header/Header';
import { ProductosCard } from '../ProductCard/ProductCard';


export const Productos = () => {
    const {count, setCount} = useState(1);
    const {productos, setProductos} =  useState([]);

    useEffect(()=>{
        fetch(`https://dummyjson.com/products`)
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            setProductos(data.products) 
        })
    },[])

    return (
        <> 
            <Header title="Productos"/>
            {
                productos && productos.map((producto)=>{
                    return <ProductosCard key={producto.id} contenido={producto}/>
                    
                })
           }
        </>
    )
}