
import UseCard from '../UserCard/UseCard';
import { useState, useEffect, } from 'react';

export const Section = ( ) => {

  const [count, setCount] = useState(1)
  const [user, setUser] = useState({})
  

  useEffect(()=>{
    fetch(`https://dummyjson.com/users/${count}`)
    .then(res => res.json())
    .then(data=>{
      console.log(data)
      setUser(data)
    })
  },[count])



  const handleSiguiente = () =>{
    
    setCount( count +1 )

  }
  const handleAnterior = () =>{
    if (count > 1 ){
      setCount( count - 1)
    } else{
      alert('No se encontraron mas usuarios')
    }
  }

  return (
    <>    <div className='container-card'>
            <UseCard key={user.id} contenido={user}/>
                <div className='container-button-user'>
                    <button onClick={handleAnterior}>anterior</button> 
                    <button onClick={handleSiguiente}>siguiente</button>
                </div>
          </div>
    </>        
                    
  )
}

