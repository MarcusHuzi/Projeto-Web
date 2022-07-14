import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    nome:{
        type:String,
        required: true,
        trim: true
    },
    cpf:{
        type:String,
        trim:true,
        index:true,
        unique: true
    },
    email: {
        type:String,
        required: true,
        index: true,
        unique:true
    },
    tel:{
        type:String,
        required: true,
    },
    nasc:{
        type:String,
        required: true,
    },
    senha:{
        type:String,
        required: true,
    },

    cep:{
        type:String,
        required: true,
    },
    num:{
        type:Number,
        required: true,
    },
    comp:{
        type:Number,
    }

});


export default mongoose.model('Client', schema);
