const http = require("http");

http
  .createServer((req, res) => {
    // res.writeHead(status code, { "headers });
    res.writeHead(200, { "Content-Type": "application/json" });
    // res.write('Hola mundo');
    // res.write('Hola mundo');
    let salida = {
      nombre: "adrian",
      edad: 28,
      url: req.url,
    };
    res.write(JSON.stringify(salida));

    res.end(); //
  })
  .listen(8080);

console.log("Escuchando el servidor 8080");
