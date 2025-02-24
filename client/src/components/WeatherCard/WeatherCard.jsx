import PropTypes from 'prop-types'


export const WeatherCard = ({weather}) => {
    
    if(!weather || weather.length === 0){
        return console.log("no hay datos")
    }

    const {id, nombre, apellido, edad} = weather;
    

    return (  
              <div key={id} className='card-section' id={id}>
                <h2 className='name'>{nombre}</h2>
                <p className='email'>{apellido}</p> 
                <p className='description'>{edad}</p>
              </div>
      )
}      

WeatherCard.propTypes = {
  weather: PropTypes.shape({
    id: PropTypes.number,
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    edad: PropTypes.number,
    length: PropTypes.number
  })
}