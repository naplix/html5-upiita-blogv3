/*1.- obtenemos un objeto que no permita usar la libreria express*/
var express = require("express");
var nunjucks = require("nunjucks");
var app = express();
app.listen(8010);

console.log("servidor levantado...");

/*configurar el sistema de templates*/
nunjucks.configure(__dirname + "/vistas",{
	express:app
});

/*configurar rutas estaicas*/
app.use("/css", express.static(__dirname + "/css"));
app.use("/imagenes", express.static(__dirname + "/imagenes"));
app.use("/javascript", express.static(__dirname + "/javascript"));
app.use("/videos", express.static(__dirname + "/videos"));

console.log("rutas estaicas");

/*configurar el sistema de templates*/