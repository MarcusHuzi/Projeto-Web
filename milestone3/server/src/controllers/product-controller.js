import mongoose from 'mongoose';

const Product = mongoose.model('Product');

const controller = {};

controller.getAllProducts = async (req, res) => {
    try {
        const data = await Product
            .find({ active: true }, 'slug title description price category in_stock sold image_src image_alt')
        res.status(200).send(data)
    } catch (e) { res.status(400).send(e) }
}

controller.getBySlug = async (req, res) => {
    try {
        const data = await Product
            .findOne({ active: true, slug: req.params.slug})
        res.status(200).send(data)
    } catch (e) { res.status(400).send(e) }
}

controller.newProduct = async (req, res) => {
    const product = new Product(req.body)
    try{
        await product.save();
        res.status(201).send({
            message: "Produto cadastrado."
        })
    }
    catch(e){
        res.status(400).send({
            message: "Falha no cadastro.",
            data: e
        })
    }
}

controller.updateProduct = async (req, res) => {
    try{
        await Product
            .findByIdAndUpdate(req.params.id, {
                $set: {
                    slug: req.body.slug,
                    title: req.body.title,
                    description: req.body.description,
                    price: req.body.price,
                    active: req.body.active,
                    category: req.body.category,
                    in_stock: req.body.in_stock,
                    sold: req.body.sold,
                    image_src: req.body.image_src,
                    image_alt: req.body.image_alt
                }
            });
        res.status(201).send({
            message: 'Produto atualizado com sucesso!'
        });
    } catch (e) {
        res.status(400).send({
            message: 'Falha na atualização',
            data: e
        });
    }
}

controller.deleteProduct = async (req, res) => {
    try{
        await Product
            //.findOneAndRemove({slug: req.params.slug}); // Delete by id
            .findByIdAndRemove(req.params.id);
        res.status(200).send({
            message: 'Produto deletado com sucesso!'
        });
    } catch (e) {
        res.status(400).send({
            message: 'Falha no delete',
            data: e
        });
    }
}

export default controller;