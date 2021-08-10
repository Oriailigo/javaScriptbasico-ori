// Asincronismo
// cuando tengo un bucle y un timeout, lo primero que siempre
// se ejecuta es el bucle, y por ultimo el timeout.

//Ejercicio crear un  setTimeout y un bucle con el for
setTimeout(() =>
    console.log("termine"),

    1000);

for (let i = 0; i < 12; i++) {
    console.log("estoy en un bucle");
}