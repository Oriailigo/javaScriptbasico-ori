let permitido = 'Usuario permitido'
let mifuncion = acceso => acceso

let persona = {
    nombre:"pepe",
    miAutomovil: [
        pintura = {
            marcar:"Marca",
            precio: 20000,
            color:"Verde"
        },
        vendedor = {
            nombre: "Ciapfa",
            edad : 2
        }
    ]
}

let miArray = ['Ciaffa',2020,34.9,true,['Otro Array','Array',7900], mifuncion(permitido),persona]

const index = () => {
    console.log(miArray[6].miAutomovil);
}


module.exports = {
    index
}