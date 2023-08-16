import { useState } from "react";
import Card from './Components/Card';

function Form({onAddPersonajes}) {
  
    const [personajes, setPersonajes] = useState({
        nombre: '',
        poder: '',
        transformacion: '',
        raza: ''
    })
    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)
    
    const handleSubmit = (event) => {
        event.preventDefault()
         
        if(personajes.nombre.length > 3 && personajes.poder.length >6 ) {     
            setShow(true)
            setErr(false)
        } else {
            setErr(true)
            setShow(false)
        }
    
    }
    return (

    <div>
        <form onSubmit={handleSubmit} className="formulario">

        <label>Nombres de Dragon Ball Z</label>
        <input type="text"  onChange={(e) => setPersonajes({...personajes, nombre: e.target.value})}/>

        <label>Poder</label>
        <input type="text"onChange={(e) => setPersonajes({...personajes, poder: e.target.value})}/>

        <label>Transformacion</label>
        <input type="text"  onChange={(e) => setPersonajes({...personajes, transformacion: e.target.value})}/>
        <label >Raza</label>
        <select  onChange={(e) => setPersonajes({...personajes, raza: e.target.value})}>
            <option value="">Seleccione una Raza</option>
            <option value="Terricola">Terricola</option>
            <option value="Saiyajins">Saiyajins</option>
            <option value="Namekusei">Namekusei</option>
        </select>



        <button>Enviar</button>
        {err && 'Por favor chequea que la información sea correcta'}
        </form>
        {show  && <Card personajes={personajes}/>} 
    </div>
    )
}


export default Form;