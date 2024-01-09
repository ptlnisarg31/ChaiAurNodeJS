import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [jokes,setJokes] = useState([])

  useEffect(() =>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    }).catch((error) =>{
      console.log(error)
    })
  })
  return (
    <>
    <h1>Chai And FullStack</h1>
    <p>Jokes : {jokes.length}</p>
    {
      jokes.map((joke)=>(
        <div key={joke.id}>
      <h3>{joke.title}</h3>
      <p>{joke.content}</p>
        </div>
      ))
    }
    </>
  )
}

export default App
