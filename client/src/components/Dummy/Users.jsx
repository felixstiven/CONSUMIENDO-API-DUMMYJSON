

import UseCard from '../UserCard/UseCard';
import { useState, useEffect, useCallback, } from 'react';

export const Users = ( ) => {
  
  
  const [count, setCount] = useState(1)
  const [user, setUser] = useState({})

  useEffect(()=>{

    fetch(`https://dummyjson.com/users/${count}`)
    .then(res => {
      if(!res.ok){
        throw new Error('Failed to fetch data')
      }
      return res.json();
    })
    .then(data=>{
      if(data && data.id){
        setUser(data);
      }else{
        alert('No se encontaron usuarios');
      }
    }).catch(error =>{
      console.error('Error al obetener los usuarios',error);
      alert('Error al obetener los suarios');
    })
  },[count])

  const handleSiguiente = (e) =>{
    e.preventDefault();
    setCount( count + 1)

  };

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
                    <button type='button' onClick={handleSiguiente} >Siguiente</button> 
                    <button type='button' onClick={handleAnterior} >Anterior</button>
                </div>
          </div>
    </>        
                    
  )
}

