import mongoose from "mongoose";

const List = mongoose.model('List')

const controller = {};

controller.getAllLists = async (req,res)=>{
    try{
        const data = await List
            .find({active: true})
        res.status(200).send(data)
    } catch (e){
        res.status(400).send(e)
    }
};

controller.getUserLists = async (req,res)=>{
    try{
        const data = await List
            .find({email: req.params.email})    
        res.status(200).send(data) 
    } catch (e){
        res.status(400).send(e)
    }
};

controller.addList = async (req, res) => {
    const list = new List(req.body)
    try{
        await list.save()
        res.status(201).send({
            message: "Lista adicionada",
        });
    } catch(e){
        res.status(400).send({
            message: "Falha na operação",
            data: e
        });
    }
};

controller.delList = async (req,res)=>{
    try{
        await List
            .findByIdAndRemove(req.params.id);
        res.status(200).send({
            message: 'Lista deletada com sucesso'
        });
    } catch(e){
        res.status(400).send({
            message: 'Falha no delete',
            data: e
        });
    }
};

export default controller;