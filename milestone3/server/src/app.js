import express from 'express';
import bodyParser from 'body-parser';
import index from './routes/index.js';
import mongoose from 'mongoose';
import Client from './models/clients.js';

mongoose.connect('mongodb://localhost:27017/mercado')

const app = express();
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extend: false}));

app.use('/store', index);

export default app;