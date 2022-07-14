import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    nome:{
        type: String,
        required: true,
        trim: true
    },
    cpf:{
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true
    },
    senha:{
        type: String,
        required: true,
        trim: true,
    },
    tel:{
        type: String,
        required: true,
        trim: true
    },
    nasc:{
        type: Date,
        required: true,
    },
    cep:{
        type: String,
        required: true,
        trim: true
    },
    endereco:{
        type: String,
        required: true,
        trim: true
    },
    isAdm:{
        type: Boolean,
        required: true,
        default: false
    }
});


export default mongoose.model('Client', schema);
