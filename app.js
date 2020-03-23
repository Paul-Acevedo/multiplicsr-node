const fs = require('fs');
let base = 2;
let data = '';
for (let i = 0; i < 10; i++) {
    data += i * base;
}

fs.writeFile('tabla.txt', data, (err) => {
    if (err) throw err;

    console.log('fue creado');
});