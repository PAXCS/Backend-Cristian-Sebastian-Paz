const express = require('express')
const app = express()
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hola manola');
})
app.get('/clima', (req, res) => {
    res.send("Hace frio!");
})

app.listen(port, () => {
    console.log("Tu servidor esta corriendo en el puerto: " + port);
})

app.on("error", error => console.log("El error es: " + error));