const http = require('http');

http.createServer((resp, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'fernando',
        edad: 32,
        url: resp.url
    }

    res.write(JSON.stringify(salida));

    res.end();
}).listen(8081);

console.log('Escuchando el puerto 8081');