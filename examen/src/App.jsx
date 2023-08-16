import { useState } from 'react'
import './App.css'
import Form from './Components/Form'



function App() {
  const [personajes,setPersonajes]=useState([]);
  
  const addPersonajes=(personaje)=>{
    setPersonajes([...personajes,personaje]);
    console.log(personajes);
  };
  return (
    <>
      <Form onAddPersonajes={addPersonajes}/>
    </>
  );
}

export default App
