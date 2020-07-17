const express = require("express");
const app = express();

// express hbs engine
app.set("view engine", "hbs");

// app.use(express.static(folder q queremos q sea statico o queremos q siempre se vea que sea publico ))//para el contenido statico de una pagina, un middleware se ejecuta siemrpre  antes de todo
app.use(express.static(`${__dirname}/public`)); //para el contenido statico de una pagina, un middleware se ejecuta siemrpre  antes de todo

app.get("/", (req, res) => {
  // let salida = {
  //   nombre: "adrian",
  //   edad: 28,
  //   url: req.url,
  // };
  //   res.send("Hello World");
  // res.json({ salida });

  res.render("home", {
    nombre: "Adrian",
    anio: new Date().getFullYear(),
  }); // renderiza el archivo home.hbs
});

app.get("/data", (req, res) => {
  res.json({ hola: "Hola  data" });
});

app.listen(3000, () => {
  console.log("Escuchando el servidor en el puerto 3000");
});
