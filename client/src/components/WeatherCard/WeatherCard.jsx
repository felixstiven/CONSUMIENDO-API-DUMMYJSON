import PropTypes from 'prop-types'
import Swal from 'sweetalert2';


export const WeatherCard = ({weather, onDelete}) => {
    
    if(!weather || weather.length === 0){
        console.log("no hay datos")
        return null;
    }

    const {_id, nombre, apellido, edad, foto} = weather;

    const handleDelete = async (id)=>{
      console.log(id);

      const BASEURL = "http://localhost:5000/usuario/";

      // confirmacion antes de elimnar
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"});

      if (result.isConfirmed){
        //Solo despues de confirmar, realizamos la solicitud Delete
        const response = await fetch(`${BASEURL}/${id}`,{
          method:"DELETE"
        });
        if(response.ok){
          Swal.fire({  
            title: "Deleted!",  
            text: "Your file has been deleted.",  
            icon: "success"  
          }); 
        } 
        if(onDelete){
          onDelete(id);
        }
      } else {
        Swal.fire({  
          title: "Error!",  
          text: "There was an error deleting the user.",  
          icon: "error"  
        });  
      }   
    };
    

    return (  
              <div key={_id} className='card-section' id={_id}>
                {
                  foto ?
                     <div>
                       <img src={foto} />
                     </div>
                     :<div>
                        <img src='avatar.png' alt={`${nombre} ${apellido} `}/>
                      </div>
                }
                <h2 className='name'>{nombre}</h2>
                <p className='email'>{apellido}</p> 
                <p className='description'>{edad}</p>
                <div>
                  <button>Editar</button>
                  <button onClick={(e) => handleDelete(_id)}>eliminar</button>
                </div>
              </div>
      )
}      

WeatherCard.propTypes = {
  weather: PropTypes.shape({
    _id: PropTypes.string,
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    edad: PropTypes.number,
    length: PropTypes.number
  }).isRequired,
  onDelete: PropTypes.func
}