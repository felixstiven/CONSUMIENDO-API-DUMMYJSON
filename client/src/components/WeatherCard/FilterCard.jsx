import PropTypes from 'prop-types'
import Swal from 'sweetalert2';


export const FilterCard = ({filter, onDelete}) => {
    
    if(!filter || filter.length === 0){
        console.log("no hay datos")
        return null;
    }

    const {_id, nombre, apellido, edad} = filter;

    const handleDelete = async (id)=>{
      console.log(id);

      const BASEURL = "http://localhost:4000/usuario/";

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
              console.log('weather', filter),
          
              <div key={_id} className='card-section' id={_id}>
                {  
                  filter.image && filter.image.secure_url ? (
                    <img src={filter.image.secure_url} alt={filter.nombre} />
                  ): (
                    
                      <img src='avatar.png' alt={`${nombre} ${apellido}`} />  
                     
                  )
                }
                <h5 className='name'>Nombre: {nombre}</h5>
                <p className='email'>Apellido: {apellido}</p> 
                <p className='description'>Edad: {edad}</p>
                <div className='btn-section'>
                  <button className='btn'>Editar</button>
                  <button className='btn btn-delete' onClick={() => handleDelete(_id)}>Eliminar</button>
                </div>
              </div>
             
      )
}      

FilterCard.propTypes = {
  filter: PropTypes.shape({
    _id: PropTypes.string,
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    edad: PropTypes.number,
    length: PropTypes.number,
    secure_url: PropTypes.string,
    image: PropTypes.shape({
      secure_url: PropTypes.string
    })
  }).isRequired,
  onDelete: PropTypes.func
}