let user = 'Heisenberg';
let persona = {
    nombre:'Daniel',
    sexo:'Masculino'
}

let objeto = {
    // clave:valor
    nombre:'sergio',
    edad:27,
    importante:true,
    texto:`Usuario ${user}`,
    miFuncion: (a,b) => a+b,
    otroObjeto: persona,
    fecha: new Date(),
    array: [1,2,3,4]
}


const extrerTexto = ({texto}) => texto

const index = () => {
    console.log(objeto.texto);
    console.log(objeto.miFuncion(4,8));
    console.log(objeto.otroObjeto);
    console.log(objeto.fecha.getFullYear());
    console.log(objeto.array);
    // desestructuracion de objeto
    const { nombre } = objeto;
    console.log(nombre);
    console.log(extrerTexto(objeto));
}


module.exports = {
    index
}