
const index = ()=>{

    // const funcionParam = () => console.log('Soy una funcion')
    // let funcion = (callback) => {
    //     console.log('hola funcion');
    //     return callback
    // }

    // funcion(funcionParam);


    // NOTA RESPECTO AL ORDEN DE EJECUCION 
    // primero se ejecuta lo que esta en la pila de ejecucion(funciones) y luego lo que esta en la cola de tareas(callbakcs)

    // console.log(1);
    setTimeout(() => console.log('hola mundo') , 0);
    // console.log(2);
    // console.log(3);
    // console.log(4);
    // console.log(5);
    // console.log(6);
    // console.log(7);
    // console.log(8);
    // console.log(9);

    for (let i = 1; i < 9999; i++) {
        console.log('ya termino este bucle');
    }
}


module.exports = {
    index
}