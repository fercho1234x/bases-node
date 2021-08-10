const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true, // Required
        describe: 'Base de la tabla de multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe de ser un numero';
        }
        return true;
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false, // Required
        default: false,
        describe: 'Muestra la tabla en la consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Multiplicar hasta'
    })
    .argv;

module.exports = argv;