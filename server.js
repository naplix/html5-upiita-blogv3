/*1.- obtenemos un objeto que no permita usar la libreria express*/
var express = require("express");
var nunjucks = require("nunjucks");
var bodyParser = require("body-parser");
/* librerias para el chat */
var socketio = require("socket.io");
var sanitizer = require("sanitizer");
var http = require("http");

var app = express();/* servidor sencillo */
var servidor = http.createServer(app); /*servidor http que es mas robusto */
//servidor.listen(8010);

//obtenemos el puerto
var PUERTO = 8010, HOST="127.0.0.1";
if(process.env.OPENSHIFT_NODEJS_PORT){
	PUERTO = process.env.OPENSHIFT_NODEJS_PORT;
	HOST = process.env.OPENSHIFT_NODEJS_IP;
}
servidor.listen(PUERTO, HOST);


console.log("servidor levantado...");

/*configurar el sistema de templates*/
nunjucks.configure(__dirname + "/vistas",{
	express:app
});
console.log("sistema de templates configurado..");

/* usar body parser para recibir parametros del cliente*/
app.use(bodyParser());

/*configurar rutas estaicas*/
app.use("/css", express.static(__dirname + "/css"));
app.use("/imagenes", express.static(__dirname + "/imagenes"));
app.use("/javascript", express.static(__dirname + "/javascript"));
app.use("/videos", express.static(__dirname + "/videos"));

console.log("rutas estaicas configuradas ..");

/*responder a peticiones get*/
/* http://127.0.0.1:8010/ */
app.get("/", function(request, response){
      response.render("index.html");
});
/* http://127.0.0.1:8010/ */
app.get("/home", function(request, response){
      response.render("index.html");
});
/* http://127.0.0.1:8010/ */
app.get("/galeria", function(request, response){
      response.render("galeria.html");
});

app.get("/contacto", function(request, response){
      response.render("contacto.html");
});

app.get("/chat", function(request, response){
      response.render("chat.html");
});

app.get("/ubicacion", function(request, response){
      response.render("ubicacion.html");
});

/*Responder a una peticion post*/
app.post("/suscribir",function(request, response){
	var correo = request.body.email;
	console.log("Email " + correo);
	response.render("suscribir.html",{
		email: correo,
		mensaje: "Hola Cliente"
	});
});

app.post("/contactar",function(request, response){
	var nombre = request.body.nombre;
	var comentario = request.body.comentario;
	response.render("contactar.html",{
		nombreCliente: nombre,
		comentarioCliente: comentario
	});
});

/* Chat */
/* obtener un socket para comunicarme con todos */
var io = socketio.listen(servidor);
/* escuchar peticiones de todos los clientes */
io.sockets.on("connection", function(socket){
	/*socket representa al cliente que me envío el mensaje*/
	socket.on("mensaje_al_servidor", function(datosCliente){
		var nombre = sanitizer.escape(datosCliente.nombre);
		var mensaje = sanitizer.escape(datosCliente.mensaje);
		console.log("Nombre: " + nombre);
		console.log("Mensaje " + mensaje);
		/*envio datos a todos*/
		io.sockets.emit("mensaje_al_cliente",{
			nombreCliente: nombre,
			mensajeCliente: mensaje
		});
	});
});













