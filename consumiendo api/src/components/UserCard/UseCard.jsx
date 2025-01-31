import { useState } from "react";

export const UseCard = ({user}) => {

  const [isContacted, setIsContacted] = useState(false)
  //const [tecnologis, setTecnologis] = useState(['React', 'Node', 'MongoDB'])

  const {id, firstName, email, image} = user

  const handleClick = () => {
    setIsContacted(!isContacted)
    
  }


  return (
    <div className='card' >
        <img  className="image" src={image} alt={firstName}/>
        <h2 className='name'>{firstName}</h2>
        <p className='email'>{email}</p>
        <button  id={id} onClick={() => {handleClick()}}>
          {
            isContacted ? '3107729036' : 'Contactar'
          }
        </button>
    </div>
  )
}

export default UseCard