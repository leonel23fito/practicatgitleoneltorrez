const math={}
function sumar(x,y){
console.log(x+y);
} 
function restar(x,y){
    console.log(x-y);
    } 
function multiplicar(x,y){
        console.log(x*y);
        } 
function dividir(x,y){
            console.log(x/y);
            } 
math.sumar=sumar;
math.restar=restar;
math.multiplicar=multiplicar;
math.dividir=dividir;

         
          module.exports=math;