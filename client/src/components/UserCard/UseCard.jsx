import { useState } from "react";
import PropTypes from 'prop-types';

export const UseCard = ({ contenido }) => {

  const [isContacted, setIsContacted] = useState(false)
  // const [tecnologis, setTecnologis] = useState(['React', 'Node', 'MongoDB'])

  const {id, firstName, phone, email, image} = contenido
  const handleClick = () => {
    setIsContacted(true)
}


  return (
    <div className='card-section' >
        <img  className="image" src={image} alt={firstName}/>
        <h2 className='name'>{firstName}</h2>
        <p className='email'>{email}</p>
        <p className='description'>{phone}</p>
        <button  id={id} onClick={() => {handleClick()}}>
          {
            isContacted ? 'Contactado' : 'Contactar'
          }
        </button>
    </div>
  )
}
UseCard.propTypes = {
  contenido: PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes,
    email: PropTypes,
    phone: PropTypes,
    image: PropTypes,
  })
};

export default UseCard;
