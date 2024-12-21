

const {crearArchivo} = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear(); // Limpia la console

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err))


// ****************************************************************
/* const fs = require('fs');
// Todo el contenido que a continuación se muestra
// se pasó a multiplicar.js
console.log('======================');
console.log(`     Tabla del: 5    `);
console.log('======================');

// Tabla del 5
const base = 3;
let salida = '';

for(let i=1; i<=10; i++){
    //console.log(`${base} x ${i} = ${base * i}`);
    salida += `${base} x ${i} = ${base * i}\n`; // Concatenamos variables
}

console.log(salida); // Solo para verificar que la aplicacion esta bien hasta cierto punto

fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
    if(err) throw err;
    console.log(`tabla-${base}.txt creado`);
})

fs.writeFileSync(`tabla-${base}.txt`, salida);

console.log(`tabla-${base}.txt creado`); */

// USAR nmp install para reconstruir todos los node_modules