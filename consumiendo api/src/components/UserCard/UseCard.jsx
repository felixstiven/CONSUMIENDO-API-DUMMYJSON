import { useState } from "react";

export const UseCard = ({user}) => {

  const [isContacted, setIsContacted] = useState(false)
  const [tecnologis, setTecnologis] = useState(['React', 'Node', 'MongoDB'])

  const {id, firstName, email, image} = user

  const handleClick = () => {
    const nexTecnologis = [...tecnologis, 'Express']
    setTecnologis(nexTecnologis)
}


  return (
    <div className='card' >
        <img  className="image" src={image} alt={firstName}/>
        <h2 className='name'>{firstName}</h2>
        <p className='description'>{email}</p>
        <button  id={id} onClick={() => {handleClick()}}>
          {
            isContacted ? 'Contactado' : 'Contactar'
          }
        </button>
    </div>
  )
}

export default UseCard