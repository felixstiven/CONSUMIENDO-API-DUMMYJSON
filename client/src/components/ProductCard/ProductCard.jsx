import './ProductosCard.css';

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
    )
}