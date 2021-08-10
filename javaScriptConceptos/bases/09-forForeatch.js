const { clear } = require("console");

const index = ()=> {

    let miArray = ['HOLA', 2021, 2020, 'Adios'];
    let persona1 = {
        nombre: 'sergio',
        edad:27
    }
    let persona2 = {
        nombre: 'oriana',
        edad:25
    }
    let persona3 = {
        nombre: 'jefferson',
        edad:33
    }

    let personas = [persona1,persona2,persona3];
    clear();

    // for (let i = 0; i < personas.length; i++) {
    //     const element = personas[i];
    //     if (element.edad > 27){break}
    //     console.log(`nombre: ${element.nombre} \nedad:   ${element.edad} años\n`);
    // }


    personas.forEach((element,i) =>{ 
        console.log(i,element)
        
    })

    // for (let i = 0; i < miArray.length; i++) {
    //     const element = miArray[i];
    //     console.log(`elemento de array: ${element}`);
    // }

    // for (let i = 1; i <= 10; i++) {
    //     if( i == 1){
    //         console.log(`hola ${i} vez`);
    //     } else {
    //         console.log(`hola ${i} veces`);
    //     }
        
    // }


}

module.exports = {
    index
}