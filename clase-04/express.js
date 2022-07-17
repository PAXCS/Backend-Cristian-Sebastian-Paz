const express = require('express')
const Contenedor = require ("./main.js");
const app = express()
const port = 8080;

const productos = new Contenedor("./products.txt")

app.get('/producto', async (req, res) => {
    const product = await productos.getAll()
    //console.log(product);
    res.send(product);
}) 
 app.get('/productoRandom', async (req, res) => {
    const producto = await productos.getAll()
    const productoRandom = producto [Math.floor(Math.random() *producto.length)];
    //console.log(productoRandom);
    res.send(productoRandom);
}) 

   app.listen(port, () => {
    console.log("Tu servidor esta corriendo en el puerto: " + port);
})  

app.on("error", error => console.log("El error es: " + error)); 