import './ProductosCard.css';
import PropTypes from 'prop-types';

export const ProductosCard = ({contenido}) => {
    const {id, description, price, images } = contenido;
  

    return (
        <>
          <div   className='card' key={id} id={id}>
            <img className="image" src={images[0]} alt={description}/>
            <h2 className='description'>{description}</h2>
            <div className="price-container">
            <p className='price'>{`${price} USD`}</p>
            </div>
          </div>
        </>
)}

ProductosCard.propTypes = {
    contenido: PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};