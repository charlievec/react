const express=require('express');
const app = express();
const cors=require('cors');
const mysql=require('mysql')


const db=mysql.createPool({
host: 'localhost',
user: 'root',
password:"",
database:"prueba"
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))//

app.get('/usuarios', (req, res) => {
    const sqlSelect="SELECT * FROM tbl_usuario "
    db.query(sqlSelect,(err,result)=>{
    res.send(result)
    });


})

app.post('/api/create', (req, res)=>{

    const nombre_usuario=req.body.nombre_usuario;
    const cedula_usuario=req.body.cedula_usuario;
    const teléfono_usuario=req.body.teléfono_usuario;
    const mail_usuario=req.body.mail_usuario;
   
    const sqlinstert="INSERT tbl_usuario (nombre_usuario, cedula_usuario,teléfono_usuario,mail_usuario) VALUES(?,?,?,?)"
    db.query(sqlinstert,[nombre_usuario,cedula_usuario,teléfono_usuario,mail_usuario],(err,result)=>{
    console.log(err)
    });
});

app.delete('/api/delete/:id_usuario', (req, res)=>{

    const name=req.params.id_usuario;
    const sqldelete="DELETE FROM tbl_usuario WHERE id_usuario = ?"
    db.query(sqldelete,name,(err,result)=>{
    res.send(result)
    if (err) console.log(err)
  
    })
});

app.put('/update', (req, res)=>{

    const id=req.body.id_usuario;
    const nombre_usuario=req.body.nombre_usuario;
       
    db.query("UPDATE tbl_usuario SET nombre_usuario= ? WHERE id_usuario= ?",
    [nombre_usuario,id],(err,result)=>{
    
    if (err) console.log(err);
  
    
        })
    });

app.put('/updateCedula', (req, res)=>{

  const id=req.body.id_usuario;
  const cedula_usuario=req.body.cedula_usuario;
           
   db.query("UPDATE tbl_usuario SET cedula_usuario= ? WHERE id_usuario= ?",
   [cedula_usuario,id,],(err,result)=>{
        
    if (err) console.log(err);
      
     })
});


app.put('/updateTelef', (req, res)=>{

    const id=req.body.id_usuario;
    const teléfono_usuario=req.body.teléfono_usuario;
             
     db.query("UPDATE tbl_usuario SET teléfono_usuario= ? WHERE id_usuario= ?",
     [teléfono_usuario,id,],(err,result)=>{
          
      if (err) console.log(err);
        
       })
  });



  app.put('/updateMail', (req, res)=>{

    const id=req.body.id_usuario;
    const mail_usuario=req.body.mail_usuario;
             
     db.query("UPDATE tbl_usuario SET mail_usuario= ? WHERE id_usuario= ?",
     [mail_usuario,id,],(err,result)=>{
          
      if (err) console.log(err);
        
       })
  });
  




    


app.listen(3001,()=>{


console.log('running on port 3001');

});

