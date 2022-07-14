import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

//Schemas
import Product from './models/product.js';
import Client from './models/client.js';

//Routes
import productRoute from './routes/product-route.js';
import indexRoute from './routes/index-route.js';
import clientRoute from './routes/client-route.js';

const app = express();

// Connect to MongoDB instance:
mongoose.connect('mongodb+srv://thales:123@cluster0.7woti.mongodb.net/myapp?retryWrites=true&w=majority');
//mongoose.connect('mongodb://localhost:27017/mercado');

// Verificação da conexão
const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected')
})

db.on('error', err => {
  console.error('connection error:', err)
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//Add routes
app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/clients', clientRoute);

export default app;