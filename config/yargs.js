const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Este es el número hasta donde quiere la tabla'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        //demandOption: true,
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .check((argv, options) => {
        //console.log('yargs', argv);
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un número';
        }
        return true; // Si no hay ningun error
    })
    .argv;

//console.log(process.argv);
//console.log(argv);
//console.log('base: yargs', argv.base);

//const [,,arg3 = 'base=5'] = process.argv;
//const [, base = 5] = arg3.split('=');
// console.log(base);

module.exports = argv;