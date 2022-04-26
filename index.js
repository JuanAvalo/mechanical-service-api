const express = require('express');
//Routes
const carRoutes = require('./routes/car');
const ownerRoutes = require('./routes/owner');
const serviceRoutes = require('./routes/service');

//Middlewares
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());

app.use('/cars', carRoutes);
app.use('/owners', ownerRoutes);
app.use('/services', serviceRoutes);

app.use(errorHandler);

app.listen(3000, ()=> console.log('Server Running'))
