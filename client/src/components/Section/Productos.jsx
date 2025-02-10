import './Section.css';
import UseCard from '../UserCard/UseCard';
import { useState, useEffect } from 'react';


export const Productos = () => {
    const {count, setCount} = useState(1);
    const {productos, setProductos} =  useState({});

    return (
        <> 
             <button onClick={handleClick}>siguiente</button>
                  <button onClick={handleAnterior}>anterior</button>
                  <section>
                    
                            <UseCard key={user.id} user={user}/>
                    
                  </section>

        </>
    )
}