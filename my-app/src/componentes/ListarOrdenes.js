// import React, {useEffect} from "react";
import Axios from "axios";
import Swal from "sweetalert2";

const ListarOrdenes = ({ordenesList, setOrdenes, editOrder, setEditing}) => {
 
    const getOrdenes = () => {  
        Axios.get("http://localhost:3001/ordenes").then((response) => {  
            setOrdenes(response.data);  
        });  
    };  

    const deleteOrdenes = (val) => {  
        Swal.fire({  
          title: "Eliminar Orden?",  
          html: `<i> ¿Estas seguro de eliminar la orden <strong>${val.orden}</strong>?</i>`,  
          icon: "warning",  
          showCancelButton: true,  
          confirmButtonColor: "#3085d6",  
          cancelButtonColor: "#d33",  
          confirmButtonText: "Si, eliminar!"  
        }).then((result) => {  
          if (result.isConfirmed) {  
            Axios.delete(`http://localhost:3001/delete/${val.id}`).then(() => {  
              getOrdenes(); // Obtener las órdenes nuevamente  
              Swal.fire({  
                title: "Eliminado",  
                text: `${val.orden} fue eliminado`,  
                icon: "success",  
                timer: 3000  
              });  
            }).catch(handleError);  
          }  
        });  
      };  
    
      const handleError = (err) => {  
        const errorMessage = JSON.parse(JSON.stringify(err)).message === "Network Error"  
          ? "Intenta más tarde"  
          : JSON.parse(JSON.stringify(err)).message;  
    
        Swal.fire({  
          icon: "error",  
          title: "Oops...",  
          text: "No se logró completar la acción",  
          footer: errorMessage,  
        });  
      };  

       // funciones para cambiar el estado 
       const cambiarEstado = async (id, nuevoEstado, phone) => {
      
        Swal.fire({
          title: `Poner estado de orden a ${nuevoEstado}`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Cambiar Estado"
        }).then( async(result) => {
          if (result.isConfirmed) {  
            try {  
                await Axios.put(`http://localhost:3001/pendiente/${id}`, {  
                    estado: nuevoEstado,
                    phone
                });  
                Swal.fire({  
                    title: `Estado cambiado a ${nuevoEstado}`,  
                    text: `Orden actualizada a ${nuevoEstado}`,  
                    icon: "success",  
                    timer: 3000  
                });  
            } catch (error) {  
                Swal.fire({  
                    icon: "error",  
                    title: "Oops...",  
                    text: "No se logró Cambiar a Estado Pendiente!",  
                    footer: error.message  
                });  
            }  
          }  
        })  
    }

  const pendienteOrden = (val) => cambiarEstado(val.id, "Pendiente", val.numphone);
  const pagadoOrden = (val) => cambiarEstado(val.id, "Pago", val.numphone);
  const canceladoOrden = (val) => cambiarEstado(val.id, "Cancelado", val.numphone);
    
      // Llamar a getOrdenes cuando el componente se monte  
    //   useEffect(() => {  
    //     getOrdenes();  
    //   }, []);  

    
      return (  
        <section className='table-'>  
          <table className="table table-hover">  
            <thead>  
              <tr>  
                <th scope="col">#</th>  
                <th scope="col">Orden</th>  
                <th scope="col">Contrato</th>  
                <th scope="col">Cliente</th>  
                <th scope="col">Descripcion</th>  
                <th scope="col">Nombre</th>  
                <th scope="col">Acciones</th>  
                <th scope="col">Estado</th>  
              </tr>  
            </thead>  
            <tbody>  
              {  
                ordenesList.map((val) => (  
                  <tr key={val.id}>  
                    <th scope='row'>{val.id}</th>  
                    <td>{val.orden}</td>  
                    <td>{val.contrato}</td>  
                    <td>{val.cliente}</td>  
                    <td>{val.descripcion}</td>  
                    <td>{val.nombre}</td>  
                    <td>  
                      <div className="btn-group" role="group" aria-label="Basic mixed styles example">  
                        <button type="button" className="btn btn-info" onClick={() => {   
                          editOrder(val);  
                          setEditing(true);  
                        }}>  
                          Editar  
                        </button>  
                        <button type="button" onClick={() => deleteOrdenes(val)} className="btn btn-warning">  
                          Eliminar  
                        </button>  
                      </div>  
                    </td>  
                    <td>  
                      <div className="btn-group" role="group" aria-label="Basic mixed styles example">  
                        <button type="button" className="btn btn-secondary" onClick={() => {pendienteOrden(val)}}>  
                          Pendiente  
                        </button>  
                        <button type="button" className="btn btn-success" onClick={() => {pagadoOrden(val)}}>  
                          Pagado  
                        </button>  
                        <button type="button" className="btn btn-danger" onClick={() => {canceladoOrden(val)}}>  
                          Rechazado  
                        </button>  
                      </div>  
                    </td>  
                  </tr>  
                ))  
              }  
            </tbody>  
          </table>  
        </section>  
      );  
}

export default ListarOrdenes;