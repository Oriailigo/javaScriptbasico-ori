const { clear } = require("console");

let miObjeto = {
    nombre:'sergio'
}


const index = ()=>{
    clear()
    // convierte un objeto o un valor a una cadena de tipo JSON
    console.log(JSON.stringify(miObjeto));
}

module.exports = {
    index
}