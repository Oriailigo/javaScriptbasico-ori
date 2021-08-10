

// const accesoU = (a=acceso)=>{
//     return a;
// }

// const accesoU = (a,n)=>{ console.log(`Usuario ${n} Acceso${a} `); }

const accesoU = (a,nombre) => { 
    console.log('usuario ${nombre}en ejecucion');
    return a
 }

module.exports = {
    accesoU
}