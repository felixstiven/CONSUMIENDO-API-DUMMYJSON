import { useState, useEffect } from "react";
import axios from 'axio'


export const UseCard = ({user}) => {

  const [isContacted, setIsContacted] = useState(false)
  //const [tecnologis, setTecnologis] = useState(['React', 'Node', 'MongoDB'])

  const {id, firstName, email, image, phone} = user

  const handleClick = () => {
    setIsContacted(!isContacted)
    
  }
  const llamarApi= () => {
      
        axios.get(`http://localhost:3000/api`)
        .then(res => res.json())
        .then(data=>{
          console.log(data)
          
        })
     

    
  }


  return (
    <div className='card' >
        <img  className="image" src={image} alt={firstName}/>
        <h2 className='name'>{firstName}</h2>
        <p className='email'>{email}</p>
        <button  id={id} onClick={() => {handleClick()}}>
          {
            isContacted ? `${phone}` : 'Contactar'
          }
        </button>
        <button onClick={llamarApi}> llamr al api </button>
    </div>
  )
}

export default UseCard