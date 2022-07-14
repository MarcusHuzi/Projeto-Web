import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
    slug: {
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    category: {
        type: String,
        required: true,
        enum : [ 'bebidas', 'hortifruti', 'laticinios', 'congelados', 'enlatados', 'cereais', 'higiene', 'limpeza']
    },
    in_stock: {
        type: Number,
        required: true
    },
    sold: {
        type: Number,
        required: true,
        default: 0
    },
    image_src: {
        type: String,
        required: false,
        trim: true
    },
    image_alt: {
        type: String,
        required: false,
        trim: true
    }
});

export default mongoose.model('Product', schema);