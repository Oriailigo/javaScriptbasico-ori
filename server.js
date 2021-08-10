var express = require('express'); //peticion
var app = express(); // inicializar express

app.use("/", (req, res) => res.send("hola estoy respondiendo al navegador2")); // dar una respuesta

app.listen(3000, () => console.log("estoy escuchando por el puerto 3000")) //escucho en el siguiente puerto (3000) y doy aviso que estoy escuchando

//1)  luego en la terminar para ejecutar el servidor
// comando que escribimos: node server
// Resultado:estoy escuchando por el puerto 3000

//2)  si ejecutamos en el navegador escribiendo http://localhost:3000/
// ressultado: hola estoy respondiendo al navegador

//3)  si se quiere actualizar la respuesta al navegador, se debe instalar
//nodemon de manera local
//comando: npm i nodemon
//para ejcutarlo:
//comando: nodemon javaScriptbasico-ori