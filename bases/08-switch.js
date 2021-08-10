
let opcion = 'Otro';

switch (opcion) {
    case 1:
        console.log('Menu de usuario');
        break;
    case 2:
        console.log('Menu Administrativo');
        break;
    case 3:
        console.log('Configuración');
        break;
    case 'Otro menu':
        let miNuevMenu = 'Salida'
        console.log(miNuevMenu);
        break;
    default:
        console.log('Break');
        break;
}


const index = ()=> {

}

module.exports = {
    index
}