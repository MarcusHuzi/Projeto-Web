import mongoose from "mongoose";

const Client = mongoose.model('Client')

const controller = {}

controller.post = async (req, res) => {
    const client = new Client(req.body)
    try{
        await client.save()
    } catch(e){
        res.status(400).send({
            message: "Falha no cadastro"
        });
    }
    res.status(201).send({
        message: "Cliente cadastrado."
    });
};

controller.get = (req,res)=>{

    res.status(200).send({
        message:"Get realizado"
    });
};

controller.put = (req,res)=>{
    res.status(201).send({
        key: req.params.key,
        value: req.body,
    });
};

controller.delete = (req,res)=>{
    res.status(201).send({
        deleting: req.params.key,
    });
};

export default controller;