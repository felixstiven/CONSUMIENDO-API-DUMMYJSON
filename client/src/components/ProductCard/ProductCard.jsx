

export const ProductosCard = (contenido) => {
    const {id, description, price, images} = contenido

    return (
        <>
          <div className='card'  id={id}>
            <img  className="image" src={images} alt={images}/>
            <h2 className='name'>{description}</h2>
            <p className='price'>{price}</p>
         </div>
        </>
    )
}