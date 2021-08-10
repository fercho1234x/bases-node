const fs = require('fs');
const colors = require('colors');

const createFile = async(base = 1, listar = false, hasta = 10) => {
    let name = '';
    let salida = '';

    for (let index = 1; index <= hasta; index++) {
        salida += ` ${ base } * ${ index } = ${ base * index } \n`;
    }

    if (listar) {
        console.log('imprime la tabla'.green);
    }

    name = `table${ base }.txt`;

    try {
        fs.writeFileSync(`./salida/${ name }`, salida);
        return name;
    } catch (error) {
        return error;
    }
}

module.exports = {
    createFile
}