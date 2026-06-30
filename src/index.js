const express = require('express');

const app = express();
app.get('/tasks', (request, response)=> response.status(200).send('ola, mundo!'))

app.listen(3333, ()=>console.log('serve rodando na porta 3333'));