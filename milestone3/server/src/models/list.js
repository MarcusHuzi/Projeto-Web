import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    user:{
        type: String,
        required: true,
        trim: true
    },

    nome:{
        type: String,
        required: true,
        trim: true
    },

    products:[{
        slug:{
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        quant:{
            type: Number,
            required: true,
            trim: true,
        }

    }]
});

export default mongoose.model('List', schema);