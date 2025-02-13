import React from "react";


export const WheatherCard = ({weather}) => {
    
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