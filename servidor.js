
const url =require("url");
const rout=require("./route");
const server = require('http');
const color=require("colors")

server.createServer(function(req,resp){
    var pathname = url.parse(req.url).pathname;
    console.log("Peticion para " + pathname + " recibida.");

    rout.route("hola");
    resp.writeHead(200,{"Content-type":"text/html"});
    resp.write  ("<h1>hola mundo"+pathname+" </h1>." );
    resp.end();
}).listen(3000);
console.log("anananan dddddddddd".red);
