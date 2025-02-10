import { useState } from "react";
import PropTypes from 'prop-types';

export const UseCard = ({ user}) => {

  const [isContacted, setIsContacted] = useState(false)
  // const [tecnologis, setTecnologis] = useState(['React', 'Node', 'MongoDB'])

  const {id, firstName, phone, email, image} = user
  const handleClick = () => {
    setIsContacted(true)
}


  return (
    <div className='card' >
        <img  className="image" src={image} alt={firstName}/>
        <h2 className='name'>{firstName}</h2>
        <p className='description'>{email}</p>
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
  user: PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default UseCard;
