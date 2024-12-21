const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base=5, listar=false, hasta=10) => {
    try{
        
    
        let salida = '';
        let consola = '';
        for(let i=1; i<=hasta; i++){
            //console.log(`${base} x ${i} = ${base * i}`);
            salida += `${base} x ${i} = ${base * i}\n`; // Concatenamos variables
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`; // Concatenamos variables
        }
        if(listar){
            console.log('==========================='.green);
            console.log('     Tabla del:'.green, colors.yellow(base));
            console.log('==========================='.green);
            console.log(consola);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        //console.log(`tabla-${base}.txt creado`);
        return `tabla-${base}.txt`;
    } catch(err) {
        throw err;
    }
    
}

/*const crearArchivo = (base=5) => {
    return new Promise((resolve, reject) => {
        console.log('===========================');
        console.log(`     Tabla del: ${base}    `);
        console.log('===========================');
    
        let salida = '';
        for(let i=1; i<=10; i++){
            //console.log(`${base} x ${i} = ${base * i}`);
            salida += `${base} x ${i} = ${base * i}\n`; // Concatenamos variables
        }
    
        console.log(salida);
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        resolve(`tabla-${base}.txt`);
    })    
}*/

module.exports = {
    //function: crearArchivo
    crearArchivo
}