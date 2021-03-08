const express=require("express")
const app=express()
const port=3000

app.use(express.static( __dirname+"/public"))
app.set("view engine","ejs")
app.set("views",__dirname+"/view")


app.get("/",(req,res)=>{
 res.render("index",{titulo:"mi titulo dinamico"})
})
app.get("/hola",(req,res)=>{
    res.render("hola")
   })


   app.use((req,res,next)=>{
    res.status(404).render("noencontrada");
})



app.listen(port,()=>{

console.log("esta es mi primer pagina")

})

