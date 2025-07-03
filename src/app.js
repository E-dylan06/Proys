const express=require('express');
const config=require('./config');
const clientes=require('./modules/client/client-controller');

const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('port',config.app.port);

//rutas
app.use('/api/clientes', clientes);
module.exports = app;