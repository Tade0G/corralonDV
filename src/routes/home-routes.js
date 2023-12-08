//requerimos express
let express=require("express");
let router=express.Router();

let path=require("path");

router.get("/", home);


//funciones

//funcion:home
//by:Tade0G
//def:responde a la ruta del home renderizando el archivo home.ejs
function home(req,res){
	res.render(path.resolve(__dirname,"../views/home.ejs"));
}

module.exports=router;