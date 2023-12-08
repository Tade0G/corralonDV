//requerimos express
let express = require("express");
let app = express();

//requerimos path
let path=require("path");

//requerimos las rutas
let rutaHome=require("./routes/home-routes.js")

//definimos el puerto
let puerto="1000";

//creamos servidor
app.listen(puerto,aviso);

//definimos los lugares de archivos estaticos
app.use(express.static("public"));

//rutas
app.use("/",rutaHome);

//definicion de motor de plantillas
app.set("view engine","ejs");

//funcion: aviso
//by: Tade0G
//def: indica el estado del servidor y su puerto
function aviso(){
	console.log("servidor corriendo en el puerto " + puerto);
}