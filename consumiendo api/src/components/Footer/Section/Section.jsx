import userImage from '../../../assets/usuario.png';
import './Section.css';

const users = [
    {
        id: 1,
        name: 'Juan',
        descripcion: 'Desarollador frontend y backend',
    },
    {
        id: 2,
        name: 'stiven',
        descripcion: 'Desarollador frontend',
    },
    {
        id: 3,
        name: 'yeimy',
        descripcion: 'Desarollador React',
    }
]

export const Section = () => {
  return (
    <section>
      {
        users.map(user => {
            return (
                <div className='card' key={user.id}>
                    <img  className="image" src={userImage} alt={user.name}/>
                    <h2 className='name'>{user.name}</h2>
                    <p className='description'>{user.descripcion}</p>
                </div>
            )
        })
      }
    </section>
  )
}

