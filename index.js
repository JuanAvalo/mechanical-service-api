const express = require('express');
//Routes
const carRoutes = require('./routes/car');

//Middlewares
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use('/cars', carRoutes);

app.use(errorHandler);

app.listen(3000, ()=> console.log('Server Running'))
