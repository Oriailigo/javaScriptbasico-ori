const express = require('express');
const app = express();


app.get('/home',(req,res)=> res.send('Hola Sergio GET'))
app.post('/login',(req,res)=> res.send('Bienvenido usuario'))
app.patch('/actualizar',(req,res)=> res.send('Usuario Actualizado'))
app.delete('/eliminar',(req,res)=> res.send('Usuario Eliminado'))

app.listen(3000,()=>{
    console.log('listen to port 3000');
})