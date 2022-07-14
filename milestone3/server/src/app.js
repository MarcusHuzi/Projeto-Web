import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

//Schemas
import Client from './models/client.js';

//Routes
import indexRoute from './routes/index-route.js';
import clientRoute from './routes/client-route.js';

const app = express();

// To access local MongoDB instance:
mongoose.connect('mongodb+srv://thales:123@cluster0.7woti.mongodb.net/?retryWrites=true&w=majority');
//mongoose.connect('mongodb://localhost:27017/mercado');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//Add routes
app.use('/', indexRoute);
app.use('/clients', clientRoute);

export default app;