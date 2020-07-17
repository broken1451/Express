const express = require("express");
const app = express();

app.get("/", (req, res) => {
  let salida = {
    nombre: "adrian",
    edad: 28,
    url: req.url,
  };
  //   res.send("Hello World");
  res.json({ salida });
});

app.get("/data", (req, res) => {
  res.json({ hola: "Hola  data" });
});

app.listen(3000, () => {
  console.log("Escuchando el servidor en el puerto 3000");
});
