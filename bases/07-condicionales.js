// let variable = true
// let variable = 0 NOTA: cualquier valor distinto de 0 es false

let edad = 82




const index = ()=> {

    // if (!variable){
    //     console.log('Verdadero');
    // } else {
    //     console.log('Falso');
    // }

    if (edad >= 18 && edad <= 30){
        console.log('Joven Adulto');
    } else if ( edad < 18 ) {
        console.log('niño o adolecente');
    } else if (edad > 30 && edad <= 55){
        console.log('Adulto');
    } else if (edad > 55){
        console.log('Anciano');
    } else {
        console.log('Indefinido');
    }


}


module.exports = {index}