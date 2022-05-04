const express = require('express');
const server = express();
const port = 3000;

server.get('/', (req,res) => {
    res.send('Segundo api con express')
})

server.listen(port, ()=>{
    console.log(`El servidor se está ejecutando en el puerto ${port}`)
})