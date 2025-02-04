
import './Section.css';
import UseCard from '../UserCard/UseCard';
import { useState, useEffect } from 'react';



export const Section = () => {

  const [count, setCount] = useState(0)
  const [like, setLike] = useState(0)
  const [users, setUsers] = useState([])

  useEffect(()=>{
    fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(data=>{
      console.log(data.users)
      setUsers(data.users)
    })
  },[])


  const handleClick = () =>{
    setCount( count + 1)
  }
  const handleLike = () =>{
    setLike( like + 1)
  }




  return (
    <>
      <h2>{count}</h2>
      <button onClick={handleClick}>contador</button>
      <h2>{like}</h2>
      <button onClick={handleLike}>link</button>
      <section>
        {
          users.map((user)  => {
              return (
                <UseCard key={user.id} user={user}/>
              )
          })
        }
      </section>
    </>
  )
}

