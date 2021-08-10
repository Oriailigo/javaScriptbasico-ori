const { clear } = require("console")

const index = () =>{
    pelicula1 = {titulo:'la monja',anio:2018,valoracion:4}
    pelicula2 = {titulo:'anabelle',anio:2014,valoracion:3}
    pelicula3 = {titulo:'anabelle 2',anio:2017,valoracion:5}
    pelicula4 = {titulo:'El cunjuro',anio:2013,valoracion:5}
    pelicula5 = {titulo:'El conjuro 2',anio:2016,valoracion:3}

    peliculas = [pelicula1,pelicula2,pelicula3,pelicula4,pelicula5];

    clear()

    let nuevoObjeto = ({valoracion}) => {
        valoracion >= 5 ? valoracion +=1 : valoracion +=0
        let objecto = {}
        objecto['valoracion'] = valoracion
        return objecto
    }

    let nuevoArray = peliculas.map(nuevoObjeto)
    console.log(nuevoArray);

    const reducirValoracion = (acum,{valoracion})=> acum + valoracion
    let mivaloracion = peliculas.reduce(reducirValoracion,0)

    console.log(mivaloracion);


    let sumarValoracion = ({valoracion}) => valoracion >= 5 ? valoracion+=1 : valoracion +=0

    let valorado = peliculas.map(sumarValoracion)
    console.log(valorado);
}

module.exports = {
    index
}