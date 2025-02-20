

import UseCard from '../UserCard/UseCard';
import { useState, useEffect, useCallback, } from 'react';

export const Section = ( ) => {
  
  
  const [count, setCount] = useState(1)
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    fetch(`https://dummyjson.com/users/${count}`)
    .then(res => res.json())
    .then(data=>{
      console.log(data)
      setUser(data);
      setLoading(false);
    })
  },[count])

  const handleSiguiente = useCallback((event) =>{
    event.preventDefault();
    setCount( prevCount => prevCount + 1)

  },[]);

  const handleAnterior = useCallback((event) =>{
    event.preventDefault();
    if (count > 1 ){
      setCount( count - 1)
    } else{
      alert('No se encontraron mas usuarios')
    }
  },[count])

  return (
    <>    <div className='container-card'>
            <UseCard key={user.id} contenido={user}/>
                <div className='container-button-user'>
                    <button onClick={handleAnterior} disabled={loading}>anterior</button> 
                    <button onClick={handleSiguiente} disabled={loading}>siguiente</button>
                </div>
          </div>
    </>        
                    
  )
}

