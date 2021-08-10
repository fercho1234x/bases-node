const { createFile } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

const colors = require('colors');

// console.clear();

// console.log(argv);

// Argumento que vienen por la consola
// console.log(process.argv);
// const [, , arg3 = 1] = process.argv;
// const [, base = 1] = arg3.split('=');
// console.log(newBase);
// const base = 302.52;

createFile(argv.b, argv.l, argv.h)
    .then(() => {
        console.log('File created :D!'.rainbow);
    })
    .catch(err => {
        throw err;
    });