const fs = require('fs');
fs.writeFile("./texto.txt","linea uno",function(err){
if(err){
console.log(err);

}
else{
fs.readFile("./texto.txt",function(error,data){

if(error){


    console.log(error)
}
else{
console.log(data.toString())

}

});

}


});
console.log("este no es un codigo bloqueante");


