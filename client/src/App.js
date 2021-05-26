import React, { useState,useEffect } from "react"
import './App.css';
import Axios from 'axios';

function App() {

const[nombre_usuario,setnombre_usuario] =useState('');
const[cedula_usuario,setcedula_usuario] =useState('');
const[teléfono_usuario,setteléfono_usuario] =useState('');
const[mail_usuario,setmail_usuario] =useState('');


const[usuarioNombreList,setUsuarioNombreList] =useState([]);

const[newnombre_usuario,setNewnombre_usuario] =useState('');
const[newcedula_usuario,setNewcedula_usuario] =useState('');
const[newteléfono_usuario,setNewteléfono_usuario] =useState('');
const[newmail_usuario,setnewmail_usuario] =useState('');



const get_usuarios=() => {
Axios.get("http://localhost:3001/usuarios").then((response) =>{
  console.log(response.data)
 setUsuarioNombreList(response.data)

})
}

const sumbitUsuario=()=>{
Axios.post("http://localhost:3001/api/create",{
  nombre_usuario:nombre_usuario,
  cedula_usuario:cedula_usuario,
  teléfono_usuario:teléfono_usuario,
  mail_usuario:mail_usuario,

}).then(()=>{
  setUsuarioNombreList([
...usuarioNombreList,
    {
    nombre_usuario:nombre_usuario,
  cedula_usuario:cedula_usuario,
  teléfono_usuario:teléfono_usuario,
  mail_usuario:mail_usuario,
    }
 ])

})

 

}

const deleteUsuario=(id)=>{

  Axios.delete(`http://localhost:3001/api/delete/${id}`)
  
};





const updateUsuario=(id_usuario)=>{
  Axios.put("http://localhost:3001/update",{
  nombre_usuario:newnombre_usuario ,id_usuario:id_usuario,
  }).then((response)=>{
})
};




const updateCedula=(id_usuario)=>{
  Axios.put("http://localhost:3001/updateCedula",{
  cedula_usuario:newcedula_usuario ,id_usuario:id_usuario,
  }).then((response)=>{
})
};


const updateTelef=(id_usuario)=>{
  Axios.put("http://localhost:3001/updateTelef",{
  teléfono_usuario:newteléfono_usuario ,id_usuario:id_usuario,
  }).then((response)=>{
})
};


const updateMail=(id_usuario)=>{
  Axios.put("http://localhost:3001/updateMail",{
  mail_usuario:newmail_usuario ,id_usuario:id_usuario,
  }).then((response)=>{
})
};








  return <div className="App">
<h1>
  PRUEBA CRUD
</h1>
<div className="form">


<label>Nombre Usuario:</label>
<input type="text" name="nombre_usuario" onChange={(e)=>{

setnombre_usuario(e.target.value)

}}/>

<label>Cedula:</label>
<input type="text" name="cedula_usuario" onChange={(e)=>{


setcedula_usuario(e.target.value)


}}/>

<label>Telefono:</label>
<input type="text" name="telefono" onChange={(e)=>{


setteléfono_usuario(e.target.value)


}}/>

<label>Mail:</label>
<input type="text" name="mail" onChange={(e)=>{


setmail_usuario(e.target.value)

}}/>

<button name="submit" onClick={sumbitUsuario} > SUBMIT</button>

<div className="usuarios">

<button onClick={get_usuarios} > Mostrar Usuarios</button>

{usuarioNombreList.map((val,key)=>{
return (<div className="usuario">

<div>
  <h3> Nombre:{val.nombre_usuario}</h3>
  <h3>Cedula: {val.cedula_usuario}</h3>
  <h3>Telefono: {val.teléfono_usuario}</h3>
  <h3> Mail:{val.mail_usuario}</h3>
  <input type="text" placeholder="Actualizar Nombre" onChange={(e)=>{
    setNewnombre_usuario(e.target.value)
}}/>
    <button 
    onClick={()=>{
      updateUsuario(val.id_usuario)}} > Actualizar</button>

<input type="text" placeholder="Actualizar Cedula" onChange={(e)=>{
    setNewcedula_usuario(e.target.value)
}}/>
    <button 
    onClick={()=>{
      updateCedula(val.id_usuario)}} > Actualizar</button>

<input type="text" placeholder="Actualizar Telefono" onChange={(e)=>{
    setNewteléfono_usuario(e.target.value)
}}/>
    <button 
    onClick={()=>{
      updateTelef(val.id_usuario)}} > Actualizar</button>

<input type="text" placeholder="Actualizar Mail" onChange={(e)=>{
    setnewmail_usuario(e.target.value)
}}/>
    <button 
    onClick={()=>{
      updateMail(val.id_usuario)}} > Actualizar</button>



  </div>


  <div>

  <button 
    onClick={()=>{
      deleteUsuario(val.id_usuario)}} > Borrar</button>

</div>





  
  </div>)
})}
</div>

</div>


  </div>
}

export default App;
