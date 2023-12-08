//requerimos express
let express=require("express");
let router=express.Router();

let path=require("path");

router.get("/", home);


//funciones

function home(req,res){
	res.sendfile(path.resolve(__dirname,"../views/home.html"));
}

module.exports=router;