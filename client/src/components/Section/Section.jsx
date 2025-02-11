
import './Section.css';
import UseCard from '../UserCard/UseCard';
import { useState, useEffect, } from 'react';




export const Section = () => {

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


  const handleClick = () =>{
    
    setCount( count +1 )

  }
  const handleAnterior = () =>{
    if (count > 1 ){
      setCount( count - 1)
    } else{
      alert('no se puede dar para atras')
    }
  }




  return (
    <>
      <div>
         <button onClick={handleClick}>siguiente</button>
         <button onClick={handleAnterior}>anterior</button> 
      </div>
      <section>
        
                <UseCard key={user.id} contenido={user}/>
        
      </section>
    </>
  )
}

